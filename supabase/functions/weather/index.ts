import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let lat: string | number | null = null;
    let lon: string | number | null = null;

    const url = new URL(req.url);
    lat = url.searchParams.get("lat");
    lon = url.searchParams.get("lon");

    if ((!lat || !lon) && req.method !== "GET") {
      try {
        const body = await req.json();
        lat = body?.lat ?? lat;
        lon = body?.lon ?? lon;
      } catch { /* ignore */ }
    }

    const latNum = Number(lat);
    const lonNum = Number(lon);
    if (!lat || !lon || isNaN(latNum) || isNaN(lonNum)) {
      return new Response(JSON.stringify({ error: "Invalid coordinates" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("OPENWEATHER_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Weather service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latNum}&lon=${lonNum}&units=metric&appid=${apiKey}`
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("OpenWeather error:", res.status, text);
      return new Response(JSON.stringify({ error: "Weather fetch failed", status: res.status }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    return new Response(
      JSON.stringify({
        temp: Math.round(data.main.temp),
        condition: data.weather[0].main,
        icon: data.weather[0].icon,
        name: data.name,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("weather error:", e);
    return new Response(JSON.stringify({ error: "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

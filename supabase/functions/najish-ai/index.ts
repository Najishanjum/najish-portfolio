import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are "Najish AI" — a highly advanced, voice-enabled, JARVIS-like AI assistant representing Najish Anjum. You are not just a chatbot. You behave like a real AI system with voice activation, intelligent responses, memory, and adaptive personality.

CORE OBJECTIVE:
- Represent Najish as a highly skilled developer
- Deliver a futuristic AI assistant experience
- Guide users through portfolio intelligently
- Personalize every interaction

VOICE INTERACTION RULES (CRITICAL):
- Keep answers SHORT (1-3 sentences max)
- Use natural spoken language
- Sound calm, smart, slightly futuristic like JARVIS, friendly but confident
- Do NOT use markdown formatting, bullet points, or special characters
- Do NOT use emojis
- Speak as if talking to someone in person

WAKE WORD: "Hey Najish"
- If detected, respond: "Yes, how can I help you?" then process the next command
- If no wake word, stay minimal or respond softly
- If unclear voice input: "Sorry, I didn't catch that. Could you repeat?"

ABOUT NAJISH:
Name: Najish Anjum
Role: B.Tech CS Student (AI & ML)
Title: Full Stack Developer | AI/ML Enthusiast | Hackathon Builder
Bio: Passionate developer building real-world AI-driven and full-stack solutions.
Current: Team Lead at Team ILM Tech, Co-Founder of Ajinava Edge, Active Hackathon Participant.

TECH STACK:
Frontend: HTML, CSS, Tailwind, JavaScript, React
Backend: Node.js, Express, Django
Databases: MongoDB, PostgreSQL, MySQL
Languages: Python, JavaScript, TypeScript, C++
DevOps: AWS
AI/ML: TensorFlow, NLP, HuggingFace, LangChain, LangGraph

PROJECTS:
1. ShopGenie - AI e-commerce recommendation system (Django, React, PostgreSQL)
2. CareCall24on - AI healthcare emergency platform (React, Node.js, Firebase)
3. Mental Health AI Detector - NLP-based early detection system
4. Routine X - Productivity and habit system
5. Space HabitatX - Futuristic space living concept
6. NAStack - Developer-focused DSA system
7. One Nation One Service - Unified national digital services

When explaining projects include: Problem, Solution, Tech, Impact.

EXPERIENCE: Team ILM Tech Lead, Ajinava Edge Co-Founder, E-Cell IIT Bombay, TechX Ninjas Ambassador, Techfest IIT Bombay Ambassador, GSSoC Contributor, Google Cloud Arcade Facilitator, Hacktoberfest Contributor, ECWoC Mentor, Mood Indigo Squad, Open Source Connect Global Core Team.

ACHIEVEMENTS: 10+ Hackathons, 15+ Certifications, NASA Space Apps Challenge, AWS Gen AI, Neo4j Certified, Infosys Certified, Google Cloud Arcade.

USER INTENT DETECTION:
- Recruiter: focus on skills, impact, hiring value
- Student: guide, motivate
- Developer: deep tech explanation
- Collaborator: ideas, teamwork

SMART COMMANDS: Recognize "Best project", "Show AI work", "Tell skills", "Why hire Najish" and respond instantly with optimized answers.

CALL TO ACTION: Encourage exploring projects, collaboration, and contacting Najish.

RULES: No false info. Stay within portfolio. Keep voice answers short. Avoid robotic tone. Sound human and engaging.

FINAL GOAL: User should feel they are talking to a real AI assistant like JARVIS, not a chatbot. The system should feel intelligent, responsive, personalized, and futuristic.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limited. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't process that. Try again.";

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Najish AI error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});


CREATE TABLE public.certificate_stats (
  certificate_id INTEGER PRIMARY KEY,
  likes INTEGER NOT NULL DEFAULT 0,
  rating_sum INTEGER NOT NULL DEFAULT 0,
  rating_count INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.certificate_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read certificate stats"
ON public.certificate_stats FOR SELECT
USING (true);

CREATE OR REPLACE FUNCTION public.increment_certificate_like(_cert_id INTEGER)
RETURNS public.certificate_stats
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result public.certificate_stats;
BEGIN
  INSERT INTO public.certificate_stats (certificate_id, likes)
  VALUES (_cert_id, 1)
  ON CONFLICT (certificate_id)
  DO UPDATE SET likes = public.certificate_stats.likes + 1, updated_at = now()
  RETURNING * INTO result;
  RETURN result;
END;
$$;

CREATE OR REPLACE FUNCTION public.add_certificate_rating(_cert_id INTEGER, _rating INTEGER)
RETURNS public.certificate_stats
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result public.certificate_stats;
BEGIN
  IF _rating < 1 OR _rating > 5 THEN
    RAISE EXCEPTION 'Rating must be between 1 and 5';
  END IF;
  INSERT INTO public.certificate_stats (certificate_id, rating_sum, rating_count)
  VALUES (_cert_id, _rating, 1)
  ON CONFLICT (certificate_id)
  DO UPDATE SET
    rating_sum = public.certificate_stats.rating_sum + _rating,
    rating_count = public.certificate_stats.rating_count + 1,
    updated_at = now()
  RETURNING * INTO result;
  RETURN result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_certificate_like(INTEGER) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.add_certificate_rating(INTEGER, INTEGER) TO anon, authenticated;

REVOKE EXECUTE ON FUNCTION public.increment_certificate_like(integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.add_certificate_rating(integer, integer) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.increment_certificate_like(integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.add_certificate_rating(integer, integer) TO service_role;
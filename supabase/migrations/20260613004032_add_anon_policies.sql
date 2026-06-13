-- Add anon insert policies for leads, cta_clicks, and page_views
DROP POLICY IF EXISTS "anon_insert_leads" ON public.leads;
CREATE POLICY "anon_insert_leads" ON public.leads
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "anon_insert_cta_clicks" ON public.cta_clicks;
CREATE POLICY "anon_insert_cta_clicks" ON public.cta_clicks
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "anon_insert_page_views" ON public.page_views;
CREATE POLICY "anon_insert_page_views" ON public.page_views
  FOR INSERT TO anon WITH CHECK (true);

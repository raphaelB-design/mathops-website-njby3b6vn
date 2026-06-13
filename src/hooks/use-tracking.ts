import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { supabase } from '@/lib/supabase/client'

export function useTracking() {
  const location = useLocation()

  useEffect(() => {
    const trackPageView = async () => {
      try {
        await supabase.from('page_views').insert({
          pagina: location.pathname + location.search,
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
        })
      } catch (e) {
        console.error('Error tracking page view', e)
      }
    }
    trackPageView()
  }, [location])
}

export const trackCtaClick = async (ctaId: string) => {
  try {
    await supabase.from('cta_clicks').insert({
      cta_id: ctaId,
    })
  } catch (e) {
    console.error('Error tracking CTA click', e)
  }
}

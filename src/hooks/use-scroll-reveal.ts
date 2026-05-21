import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.1, rootMargin = '0px') {
  const ref = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(currentRef) // Only reveal once
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isRevealed }
}

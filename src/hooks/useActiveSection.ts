import { useEffect, useState } from 'react'

export function useActiveSection<T extends string>(
  ids: readonly T[],
  fallback: T,
  enabled = true,
): T {
  const [active, setActive] = useState<T>(fallback)

  useEffect(() => {
    if (!enabled) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as T)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, enabled])

  return active
}

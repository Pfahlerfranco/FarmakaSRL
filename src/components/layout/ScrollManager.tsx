import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previousPathname = useRef<string | null>(null)

  useLayoutEffect(() => {
    const changedPage = previousPathname.current !== pathname
    previousPathname.current = pathname

    const target = hash ? document.getElementById(hash.slice(1)) : null

    if (!target) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const offset =
      Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: changedPage ? 'instant' : 'smooth',
    })
  }, [pathname, hash])

  return null
}

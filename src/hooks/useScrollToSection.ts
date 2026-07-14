import { useCallback } from 'react'

export default function useScrollToSection() {
  return useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])
}

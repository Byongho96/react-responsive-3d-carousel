import { useEffect } from 'react'

export type KeyboardSlide = 'none' | 'horizontal' | 'vertical' | 'both'

const useFocus = (
  containerRef: React.RefObject<HTMLElement>,
  autoFocus: boolean,
  slideWithKeyboard: KeyboardSlide,
  slideNext: () => void,
  slidePrev: () => void
) => {
  /**
   * Auto-focus the container element when autoFocus is true.
   */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (autoFocus) container.focus()
  }, [autoFocus])

  /**
   * Set up keydown event listener for keyboard navigation.
   */
  useEffect(() => {
    if (slideWithKeyboard === 'none') return

    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (container !== document.activeElement) return

      switch (e.key) {
        case 'ArrowLeft':
          if (
            slideWithKeyboard === 'horizontal' ||
            slideWithKeyboard === 'both'
          ) {
            slidePrev()
          }
          break
        case 'ArrowRight':
          if (
            slideWithKeyboard === 'horizontal' ||
            slideWithKeyboard === 'both'
          ) {
            slideNext()
          }
          break
        case 'ArrowUp':
          if (
            slideWithKeyboard === 'vertical' ||
            slideWithKeyboard === 'both'
          ) {
            slidePrev()
          }
          break
        case 'ArrowDown':
          if (
            slideWithKeyboard === 'vertical' ||
            slideWithKeyboard === 'both'
          ) {
            slideNext()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [slideWithKeyboard, slideNext, slidePrev])
}

export default useFocus

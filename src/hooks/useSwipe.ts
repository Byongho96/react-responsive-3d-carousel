import { useEffect, useRef } from 'react'

const MIN_SWIPE_DISTANCE = 30 // Minimum distance in pixels to consider a swipe

export type SwipeDirection = 'vertical' | 'horizontal'

const useSwipe = ({
  containerRef,
  swipeable,
  swipeDirection,
  slideNext,
  slidePrev,
  onSwipeStart,
  onSwipeEnd,
  onSwipeMove,
}: {
  containerRef: React.RefObject<HTMLElement>
  swipeable: boolean
  swipeDirection: SwipeDirection
  slideNext: () => void // Up & Left
  slidePrev: () => void // Down & Right
  onSwipeStart?: (event: TouchEvent) => void
  onSwipeEnd?: (event: TouchEvent) => void
  onSwipeMove?: (event: TouchEvent) => void
}) => {
  // Ref to track if a swipe is currently in progress
  const isSwiping = useRef(false)

  /**
   * Handle swipe gestures on a container element
   */
  useEffect(() => {
    if (!swipeable) return

    const container = containerRef.current
    if (!container) return

    let startX = 0
    let startY = 0

    const handleSwipeStart = (event: TouchEvent) => {
      isSwiping.current = true
      startX = event.touches[0].clientX
      startY = event.touches[0].clientY
      onSwipeStart && onSwipeStart(event)
    }

    const handleSwipeMove = (event: TouchEvent) => {
      if (!isSwiping.current) return
      onSwipeMove && onSwipeMove(event)
    }

    const handleSwipeEnd = (event: TouchEvent) => {
      if (!isSwiping.current) return

      isSwiping.current = false
      onSwipeEnd && onSwipeEnd(event)

      const endX = event.changedTouches[0].clientX
      const endY = event.changedTouches[0].clientY

      const deltaX = endX - startX
      const deltaY = endY - startY

      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)
      const absDelta = Math.sqrt(absDeltaX ** 2 + absDeltaY ** 2)

      if (absDelta < MIN_SWIPE_DISTANCE) return

      if (swipeDirection === 'horizontal' && absDeltaX > absDeltaY) {
        event.preventDefault()
        if (deltaX > 0) {
          slidePrev()
        } else {
          slideNext()
        }
      } else if (swipeDirection === 'vertical' && absDeltaY > absDeltaX) {
        event.preventDefault()
        if (deltaY > 0) {
          slidePrev()
        } else {
          slideNext()
        }
      }
    }

    container.addEventListener('touchstart', handleSwipeStart, {
      passive: true,
    })
    container.addEventListener('touchmove', handleSwipeMove, {
      passive: true,
    })
    container.addEventListener('touchend', handleSwipeEnd)

    return () => {
      container.removeEventListener('touchstart', handleSwipeStart)
      container.removeEventListener('touchmove', handleSwipeMove)
      container.removeEventListener('touchend', handleSwipeEnd)
    }
  }, [
    swipeable,
    swipeDirection,
    slideNext,
    slidePrev,
    onSwipeStart,
    onSwipeEnd,
    onSwipeMove,
  ])

  return { isSwiping }
}

export default useSwipe

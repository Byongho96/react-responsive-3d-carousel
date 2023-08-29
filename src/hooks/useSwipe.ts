import { useEffect } from 'react'

/**
 * Executes the corresponding function according to the direction of the touch swipe
 * @param containerRef HTML elements to detect touch events
 * @param onSwipeLeft Function to run when swiping to the left
 * @param onSwipeRight Function to run when swiping to the right
 */
const useSwipe = (
  containerRef: React.RefObject<HTMLDivElement>,
  onSwipeLeft: () => void,
  onSwipeRight: () => void
) => {
  useEffect(() => {
    const container = containerRef.current as HTMLDivElement

    // Touch start position
    const touchStartPos = {
      x: 0,
      y: 0,
    }

    // Record touch start position
    const touchStart = function (event: TouchEvent) {
      const touch = event.touches[0]
      touchStartPos.x = touch.clientX
      touchStartPos.y = touch.clientY
    }

    // Determining the direction the touch & Execute the corresponding function
    const touchEnd = function (event: TouchEvent) {
      const lastTouch = event.changedTouches[event.changedTouches.length - 1]
      const touchoffsetX = lastTouch.clientX - touchStartPos.x
      const touchoffsetY = lastTouch.clientY - touchStartPos.y

      const isHorizontalSwipe =
        Math.abs(touchoffsetX) >= 70 && Math.abs(touchoffsetY) <= 30

      if (isHorizontalSwipe) {
        const isSwipeLeft = touchoffsetX < 0
        isSwipeLeft ? onSwipeLeft() : onSwipeRight()
      }
    }

    container.addEventListener('touchstart', touchStart)
    container.addEventListener('touchend', touchEnd)

    return () => {
      container.removeEventListener('touchstart', touchStart)
      container.removeEventListener('touchend', touchEnd)
    }
  }, [containerRef, onSwipeLeft, onSwipeRight])
}

export default useSwipe

import { useEffect } from 'react'

const MIN_SWIPE_DISTANCE = 30 // px
const HORIZONTAL_SWIPE_RATIO = 3 // (offsetX / offsetY)

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

      const isSwipe =
        touchoffsetX ** 2 + touchoffsetY ** 2 > MIN_SWIPE_DISTANCE ** 2
      if (!isSwipe) return

      const isHorizontalSwipe =
        Math.abs(touchoffsetX) > HORIZONTAL_SWIPE_RATIO * Math.abs(touchoffsetY)
      if (!isHorizontalSwipe) return

      touchoffsetX < 0 ? onSwipeLeft() : onSwipeRight()
    }

    container.addEventListener('touchstart', touchStart, { passive: true })
    container.addEventListener('touchend', touchEnd, { passive: true })

    return () => {
      container.removeEventListener('touchstart', touchStart)
      container.removeEventListener('touchend', touchEnd)
    }
  }, [containerRef, onSwipeLeft, onSwipeRight])
}

export default useSwipe

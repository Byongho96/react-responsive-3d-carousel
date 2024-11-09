import { useEffect } from 'react'

const useAutoPlay = (
  autoplay: boolean,
  interval: number,
  curIndex: number,
  slideNext: () => void
) => {
  /**
   * Auto play the carousel
   */
  useEffect(() => {
    if (!autoplay) return

    const timer = window.setInterval(() => {
      slideNext()
    }, interval)

    return () => {
      clearInterval(timer)
    }
  }, [autoplay, interval, curIndex, slideNext])
}

export default useAutoPlay

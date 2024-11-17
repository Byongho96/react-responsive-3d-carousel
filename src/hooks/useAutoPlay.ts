import React, { useEffect } from 'react'

const useAutoPlay = (
  autoplay: boolean,
  interval: number,
  slideNext: () => void,
  pauseRef: React.MutableRefObject<boolean>
) => {
  /**
   * Auto play the carousel
   */
  useEffect(() => {
    if (!autoplay) return
    
    const timer = window.setInterval(() => {
      if (pauseRef.current) return
      slideNext()
    }, interval)

    return () => {
      clearInterval(timer)
    }
  }, [autoplay, interval, slideNext])
}

export default useAutoPlay

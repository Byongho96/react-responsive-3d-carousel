import { useEffect } from 'react'
import CSS_VARIABLE from '../constant/css'

const useSize = (
  items: JSX.Element[],
  htmlItemsRef: React.MutableRefObject<HTMLElement[]>,
  listRef: React.RefObject<HTMLElement>,
  width: string,
  curIndex: number
) => {
  /**
   * Set the width of each item as a CSS variable on every render.
   */
  useEffect(() => {
    const htmlItems = htmlItemsRef.current

    htmlItems.forEach((item) => {
      item.style.setProperty(CSS_VARIABLE.ITEM_WIDTH, `${item.offsetWidth}px`)
    })
  }, [items, width, curIndex])

  /**
   * Set the width and height of the Carousel list as a CSS variable
   * Use ResizeObserver if available; otherwise, falls back to window resize event.
   */
  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const handleResize = () => {
      list.style.setProperty(
        CSS_VARIABLE.CONTAINER_WIDTH,
        `${list.offsetWidth}px`
      )
      list.style.setProperty(
        CSS_VARIABLE.CONTAINER_HEIGHT,
        `${list.offsetHeight}px`
      )
    }

    handleResize() // Initial call

    const resizeObserver =
      'ResizeObserver' in window ? new ResizeObserver(handleResize) : null

    if (resizeObserver) {
      resizeObserver.observe(list)
    } else {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
}
export default useSize

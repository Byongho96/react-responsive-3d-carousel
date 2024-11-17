import { useEffect, useMemo } from 'react'
import { AlignType } from '../components/Carousel/Carousel'
import {
  DefaultOption,
  getDefaultCarouselLayoutInfo,
} from '../utils/defaultLayoutInfo'
import {
  CarouselLayoutInfo,
  LayoutStyle,
  transformCarouselLayoutInfoToStyle,
} from '../utils/layoutStyle'

export type LayoutType = 'default' | CarouselLayoutInfo

const useLayout = (
  items: JSX.Element[],
  htmlItemsRef: React.MutableRefObject<HTMLElement[]>,
  align: AlignType,
  width: string,
  height: string,
  aspectRatio: number | 'auto',
  layout: LayoutType,
  curIndex: number,
  defaultOption?: DefaultOption
) => {
  /**
   * Memoize the layout styles from layout info
   */
  const layoutStyle = useMemo(() => {
    const layoutInfo =
      layout === 'default'
        ? getDefaultCarouselLayoutInfo(items.length, defaultOption)
        : layout
    return transformCarouselLayoutInfoToStyle(layoutInfo, align)
  }, [items, align, layout, defaultOption])

  /**
   * Apply the calculated layout styles to each item on every render.
   */
  useEffect(() => {
    const htmlItems = htmlItemsRef.current

    const applyStyle = (item: HTMLElement, style: LayoutStyle) => {
      item.style.width = style.width === 'auto' ? width : style.width
      item.style.height = style.height === 'auto' ? height : style.height
      item.style.transform = style.transform

      // Toggle item width class
      if (item.style.width !== 'auto' || (item.style.height !== 'auto' && aspectRatio !== 'auto')) {
        item.classList.add('fixed-width')
      } else {
        item.classList.remove('fixed-width')
      }

      // Toggle item height class
      if (item.style.height !== 'auto' || (item.style.width !== 'auto' && aspectRatio !== 'auto')) {
        item.classList.add('fixed-height')
      } else {
        item.classList.remove('fixed-height')
      }
    }

    htmlItems.forEach((item, i) => {
      // Check the simple-calculated index first
      const primaryIdx = i - curIndex
      if (layoutStyle[primaryIdx]) {
        applyStyle(item, layoutStyle[primaryIdx])
        return
      }

      // Check the other side of the carousel
      const secondaryIdx =
        primaryIdx + (primaryIdx > 0 ? -items.length : items.length)
      if (layoutStyle[secondaryIdx]) {
        applyStyle(item, layoutStyle[secondaryIdx])
        return
      }

      // If there's no layout info for the index, apply the default layout
      applyStyle(item, layoutStyle.default)
    })
  }, [items, width, height, aspectRatio, layoutStyle, curIndex])
}
export default useLayout

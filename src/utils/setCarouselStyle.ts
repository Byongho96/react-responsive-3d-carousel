import {
  getDoubleNextIndex,
  getDoublePrevIndex,
  getNextIndex,
  getPrevIndex,
} from './getCarouselIndex'
import {
  getCurItemStyle,
  getDefaultItemStyle,
  getFiveCarouselDoubleNextItemStyle,
  getFiveCarouselDoublePrevItemStyle,
  getFiveCarouselNextItemStyle,
  getFiveCarouselPrevItemStyle,
  getThreeCarouselNextItemStyle,
  getThreeCarouselPrevItemStyle,
} from './getCarouselStyle'

/**
 *
 * @param length The total length of carousel items
 * @param curIndex Index of the current carousel item
 * @param width Width of a current carousel item
 * @param depth 3D depth of carousel
 * @param carouselItems Collection of carousel items
 */
export function setTwoCarouselStyle(
  length: number,
  curIndex: number,
  width: string,
  depth: number,
  carouselItems: HTMLCollection
) {
  const prevIndex = getPrevIndex(length, curIndex)

  const curItem = carouselItems[curIndex] as HTMLDivElement
  const prevItem = carouselItems[prevIndex] as HTMLDivElement

  curItem && Object.assign(curItem.style, getCurItemStyle())
  prevItem && Object.assign(prevItem.style, getDefaultItemStyle(width, depth))
}

/**
 *
 * @param length The total length of carousel items
 * @param curIndex Index of the current carousel item
 * @param width Width of a current carousel item
 * @param depth 3D depth of carousel
 * @param carouselItems Collection of carousel items
 */
export function setThreeCarouselStyle(
  length: number,
  curIndex: number,
  width: string,
  depth: number,
  carouselItems: HTMLCollection
) {
  const prevIndex = getPrevIndex(length, curIndex)
  const nextIndex = getNextIndex(length, curIndex)

  for (let index = 0; index < length; index++) {
    const item = carouselItems[index] as HTMLDivElement
    if (!item) {
      continue
    }
    switch (index) {
      case curIndex:
        Object.assign(item.style, getCurItemStyle())
        break
      case prevIndex:
        Object.assign(item.style, getThreeCarouselPrevItemStyle(width, depth))
        break
      case nextIndex:
        Object.assign(item.style, getThreeCarouselNextItemStyle(width, depth))
        break
      default:
        Object.assign(item.style, getDefaultItemStyle(width, depth))
    }
  }
}

/**
 *
 * @param length The total length of carousel items
 * @param curIndex Index of the current carousel item
 * @param width Width of a current carousel item
 * @param depth 3D depth of carousel
 * @param carouselItems Collection of carousel items
 */
export function setFiveCarouselStyle(
  length: number,
  curIndex: number,
  width: string,
  depth: number,
  carouselItems: HTMLCollection
) {
  const prevIndex = getPrevIndex(length, curIndex)
  const nextIndex = getNextIndex(length, curIndex)
  const doublePrevIndex = getDoublePrevIndex(length, curIndex)
  const doubleNextIndex = getDoubleNextIndex(length, curIndex)

  for (let index = 0; index < length; index++) {
    const item = carouselItems[index] as HTMLDivElement
    if (!item) {
      continue
    }
    switch (index) {
      case curIndex:
        Object.assign(item.style, getCurItemStyle())
        break
      case prevIndex:
        Object.assign(item.style, getFiveCarouselPrevItemStyle(width, depth))
        break
      case nextIndex:
        Object.assign(item.style, getFiveCarouselNextItemStyle(width, depth))
        break
      case doublePrevIndex:
        Object.assign(
          item.style,
          getFiveCarouselDoublePrevItemStyle(width, depth)
        )
        break
      case doubleNextIndex:
        Object.assign(
          item.style,
          getFiveCarouselDoubleNextItemStyle(width, depth)
        )
        break
      default:
        Object.assign(item.style, getDefaultItemStyle(width, depth))
    }
  }
}

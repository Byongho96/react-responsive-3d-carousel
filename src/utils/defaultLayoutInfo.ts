import {
  DEFAULT_FIVE_CAROUSEL_INDEX_TRANSFORM,
  DEFAULT_THREE_CAROUSEL_INDEX_TRANSFORM,
  DEFAULT_TWO_CAROUSEL_INDEX_TRANSFORM,
} from '../constant/layout'
import { CarouselLayoutInfo, LayoutInfo } from './layoutStyle'
import { round } from './math'

export type DefaultOption = {
  numOfSlides: 'auto' | 2 | 3 | 5
  widthFactor: number
  depthFactor: number
  angleFactor: number
}

/**
 * Adjust default carousel layout info based on the default option values
 */
export const adjustDefaultCarouselLayoutInfo = (
  info: CarouselLayoutInfo,
  defaultOption: DefaultOption
): CarouselLayoutInfo => {
  const adjustedInfo: { [key: string]: LayoutInfo } = {}

  Object.entries(info).forEach(([key, itemInfo]) => {
    const adjustedTranslate = {
      x: round((itemInfo.translate.x as number) * defaultOption.widthFactor, 3), // it's always number : constant/layout.ts
      y: itemInfo.translate.y,
      z: round((itemInfo.translate.z as number) * defaultOption.widthFactor, 3), // it's always number : constant/layout.ts
    }

    const adjustedRotation = {
      x: round(itemInfo.rotation.x * defaultOption.angleFactor, 3),
      y: round(itemInfo.rotation.y * defaultOption.angleFactor, 3),
      z: round(itemInfo.rotation.z * defaultOption.angleFactor, 3),
    }

    const adjustedOffset = {
      x: round((itemInfo.offset.x as number) * defaultOption.widthFactor, 3), // it's always number : constant/layout.ts
      y: itemInfo.offset.y,
      z: round((itemInfo.offset.z as number) * defaultOption.depthFactor, 3), // it's always number : constant/layout.ts
    }

    adjustedInfo[key] = {
      width: itemInfo.width,
      height: itemInfo.height,
      translate: adjustedTranslate,
      rotation: adjustedRotation,
      offset: adjustedOffset,
    }
  })

  return adjustedInfo as CarouselLayoutInfo
}

/**
 * Get default carousel layout info based on the length of items
 */
export const getDefaultCarouselLayoutInfo = (
  length: number,
  defaultOption: DefaultOption = {
    numOfSlides: 'auto',
    widthFactor: 1,
    depthFactor: 1,
    angleFactor: 1,
  }
): CarouselLayoutInfo => {
  // Get default layout info based on 'defaultOption.numOfSlides'
  if (defaultOption.numOfSlides === 2) {
    return adjustDefaultCarouselLayoutInfo(
      DEFAULT_TWO_CAROUSEL_INDEX_TRANSFORM,
      defaultOption
    )
  } else if (defaultOption.numOfSlides === 3) {
    return adjustDefaultCarouselLayoutInfo(
      DEFAULT_THREE_CAROUSEL_INDEX_TRANSFORM,
      defaultOption
    )
  } else if (defaultOption.numOfSlides === 5) {
    return adjustDefaultCarouselLayoutInfo(
      DEFAULT_FIVE_CAROUSEL_INDEX_TRANSFORM,
      defaultOption
    )
  }

  // Get default layout info based on the length of items
  if (length < 3) {
    return adjustDefaultCarouselLayoutInfo(
      DEFAULT_TWO_CAROUSEL_INDEX_TRANSFORM,
      defaultOption
    )
  } else if (length < 5) {
    return adjustDefaultCarouselLayoutInfo(
      DEFAULT_THREE_CAROUSEL_INDEX_TRANSFORM,
      defaultOption
    )
  } else {
    return adjustDefaultCarouselLayoutInfo(
      DEFAULT_FIVE_CAROUSEL_INDEX_TRANSFORM,
      defaultOption
    )
  }
}

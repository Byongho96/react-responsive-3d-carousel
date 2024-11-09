import {
  DEFAULT_FIVE_CAROUSEL_INDEX_TRANSFORM,
  DEFAULT_THREE_CAROUSEL_INDEX_TRANSFORM,
  DEFAULT_TWO_CAROUSEL_INDEX_TRANSFORM,
} from '../constant/layout'
import {
  adjustDefaultCarouselLayoutInfo,
  DefaultOption,
  getDefaultCarouselLayoutInfo,
} from './defaultLayoutInfo'
import { CarouselLayoutInfo } from './layoutStyle'

describe('adjustDefaultCarouselLayoutInfo', () => {
  it('should adjust the layout info based on the default options', () => {
    const inputInfo: CarouselLayoutInfo = {
      default: {
        width: 'auto',
        height: 'auto',
        translate: { x: 0.5, y: 0, z: 0.5 },
        rotation: { x: 10, y: 5, z: 0 },
        offset: { x: 0.1, y: 0, z: 0.2 },
      },
    }

    const defaultOption: DefaultOption = {
      numOfSlides: 'auto',
      widthFactor: 2,
      depthFactor: 3,
      angleFactor: 4,
    }

    const expectedOutput: CarouselLayoutInfo = {
      default: {
        width: 'auto',
        height: 'auto',
        translate: { x: 1.0, y: 0, z: 1.0 },
        rotation: { x: 40, y: 20, z: 0 },
        offset: { x: 0.2, y: 0, z: 0.6 },
      },
    }

    const result = adjustDefaultCarouselLayoutInfo(inputInfo, defaultOption)
    expect(result).toEqual(expectedOutput)
  })

  it('should handle multiple entries in the layout info', () => {
    const inputInfo: CarouselLayoutInfo = {
      default: {
        width: '100%',
        height: '100%',
        translate: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        offset: { x: 0, y: 0, z: 0 },
      },
      '0': {
        width: 'auto',
        height: 'auto',
        translate: { x: 0.3, y: 0, z: 0.3 },
        rotation: { x: 15, y: 0, z: 0 },
        offset: { x: 0.2, y: 0, z: 0.1 },
      },
      '1': {
        width: 'auto',
        height: 'auto',
        translate: { x: 0.4, y: 0, z: 0.4 },
        rotation: { x: 20, y: 0, z: 0 },
        offset: { x: 0.3, y: 0, z: 0.2 },
      },
    }

    const defaultOption: DefaultOption = {
      numOfSlides: 'auto',
      widthFactor: 1.5,
      depthFactor: 2,
      angleFactor: 3,
    }

    const expectedOutput: CarouselLayoutInfo = {
      default: {
        width: '100%',
        height: '100%',
        translate: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        offset: { x: 0, y: 0, z: 0 },
      },
      '0': {
        width: 'auto',
        height: 'auto',
        translate: { x: 0.45, y: 0, z: 0.45 },
        rotation: { x: 45, y: 0, z: 0 },
        offset: { x: 0.3, y: 0, z: 0.2 },
      },
      '1': {
        width: 'auto',
        height: 'auto',
        translate: { x: 0.6, y: 0, z: 0.6 },
        rotation: { x: 60, y: 0, z: 0 },
        offset: { x: 0.45, y: 0, z: 0.4 },
      },
    }

    const result = adjustDefaultCarouselLayoutInfo(inputInfo, defaultOption)
    expect(result).toEqual(expectedOutput)
  })
})

describe('getDefaultCarouselLayoutInfo', () => {
  it('should use numOfSlides from defaultOption if provided', () => {
    const defaultOption: DefaultOption = {
      numOfSlides: 3,
      widthFactor: 1,
      depthFactor: 1,
      angleFactor: 1,
    }

    const result = getDefaultCarouselLayoutInfo(5, defaultOption)
    expect(result).toEqual(
      adjustDefaultCarouselLayoutInfo(
        DEFAULT_THREE_CAROUSEL_INDEX_TRANSFORM,
        defaultOption
      )
    )
  })

  it('should select layout based on length when numOfSlides is "auto"', () => {
    const defaultOption: DefaultOption = {
      numOfSlides: 'auto',
      widthFactor: 1,
      depthFactor: 1,
      angleFactor: 1,
    }

    let result = getDefaultCarouselLayoutInfo(2, defaultOption)
    expect(result).toEqual(
      adjustDefaultCarouselLayoutInfo(
        DEFAULT_TWO_CAROUSEL_INDEX_TRANSFORM,
        defaultOption
      )
    )

    result = getDefaultCarouselLayoutInfo(4, defaultOption)
    expect(result).toEqual(
      adjustDefaultCarouselLayoutInfo(
        DEFAULT_THREE_CAROUSEL_INDEX_TRANSFORM,
        defaultOption
      )
    )

    result = getDefaultCarouselLayoutInfo(5, defaultOption)
    expect(result).toEqual(
      adjustDefaultCarouselLayoutInfo(
        DEFAULT_FIVE_CAROUSEL_INDEX_TRANSFORM,
        defaultOption
      )
    )
  })

  it('should return adjusted layout info with custom defaultOption', () => {
    const defaultOption: DefaultOption = {
      numOfSlides: 2,
      widthFactor: 2,
      depthFactor: 2,
      angleFactor: 2,
    }

    const expectedInfo = adjustDefaultCarouselLayoutInfo(
      DEFAULT_TWO_CAROUSEL_INDEX_TRANSFORM,
      defaultOption
    )

    const result = getDefaultCarouselLayoutInfo(3, defaultOption)

    expect(result).toEqual(expectedInfo)
  })
})

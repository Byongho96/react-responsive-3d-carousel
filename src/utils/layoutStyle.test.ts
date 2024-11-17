import { AlignType } from '../components/Carousel/Carousel'
import CSS_VARIABLE from '../constant/css'
import {
  transformLayoutInfoToStyle,
  transformCarouselLayoutInfoToStyle,
} from './layoutStyle'

describe('transformLayoutInfoToStyle', () => {
  it('should transform numeric width and height to CSS calc expressions', () => {
    const info = {
      width: 0.5, // 50% of container width
      height: 0.3, // 30% of container height
      translate: { x: 0.1, y: 0.2, z: 0.3 },
      rotate: { x: 10, y: 20, z: 30 },
      offset: { x: 0.1, y: 0.2, z: 0.3 },
    }
    const align: AlignType = 'center'

    const result = transformLayoutInfoToStyle(info, align)

    expect(result.width).toBe(
      `calc(${info.width} * var(${CSS_VARIABLE.CONTAINER_WIDTH}))`
    )
    expect(result.height).toBe(
      `calc(${info.height} * var(${CSS_VARIABLE.CONTAINER_HEIGHT}))`
    )
  })

  it('should handle string width and height values', () => {
    const info = {
      width: '200px',
      height: '150px',
      translate: { x: '10px', y: '20px', z: '30px' },
      rotate: { x: 0, y: 0, z: 0 },
      offset: { x: '5%', y: '10%', z: '15px' },
    }
    const align: AlignType = 'top'

    const result = transformLayoutInfoToStyle(info, align)

    expect(result.width).toBe('200px')
    expect(result.height).toBe('150px')
  })

  it('should calculate correct transform string', () => {
    const info = {
      width: 0.8,
      height: 0.6,
      translate: { x: 0.2, y: 0.1, z: 0 },
      rotate: { x: 0, y: 0, z: 45 },
      offset: { x: 0, y: 0, z: 0 },
    }
    const align: AlignType = 'bottom'

    const result = transformLayoutInfoToStyle(info, align)

    const expectedTransform = `translate(-50%, -100%)
      translate3d(calc(${info.translate.x} * var(${CSS_VARIABLE.CONTAINER_WIDTH}) + ${info.offset.x} * 100%), calc(${info.translate.y} * var(${CSS_VARIABLE.CONTAINER_HEIGHT}) + ${info.offset.y} * 100%), calc(${info.translate.z} * var(${CSS_VARIABLE.CONTAINER_WIDTH}) + ${info.offset.z} * var(${CSS_VARIABLE.ITEM_WIDTH})))
      rotate3d(0, 0, 1, calc(45deg)`

    expect(result.transform.replace(/\s+/g, ' ').trim()).toBe(
      expectedTransform.replace(/\s+/g, ' ').trim()
    )
  })

  it('should handle zero rotate magnitude correctly', () => {
    const info = {
      width: 1,
      height: 1,
      translate: { x: 0, y: 0, z: 0 },
      rotate: { x: 0, y: 0, z: 0 },
      offset: { x: 0, y: 0, z: 0 },
    }
    const align: AlignType = 'center'

    const result = transformLayoutInfoToStyle(info, align)

    const expectedTransform = `translate(-50%, -50%)
      translate3d(calc(0 * var(${CSS_VARIABLE.CONTAINER_WIDTH}) + 0 * 100%), calc(0 * var(${CSS_VARIABLE.CONTAINER_HEIGHT}) + 0 * 100%), calc(0 * var(${CSS_VARIABLE.CONTAINER_WIDTH}) + 0 * var(${CSS_VARIABLE.ITEM_WIDTH})))
      rotate3d(0, 0, 0, calc(0deg)`

    expect(result.transform.replace(/\s+/g, ' ').trim()).toBe(
      expectedTransform.replace(/\s+/g, ' ').trim()
    )
  })
})

describe('transformCarouselLayoutInfoToStyle', () => {
  it('should transform multiple layout infos to styles', () => {
    const info = {
      default: {
        width: 1,
        height: 1,
        translate: { x: 0, y: 0, z: 0 },
        rotate: { x: 0, y: 0, z: 0 },
        offset: { x: 0, y: 0, z: 0 },
      },
      0: {
        width: 0.8,
        height: 0.8,
        translate: { x: 0.1, y: 0.1, z: 0 },
        rotate: { x: 0, y: 0, z: 30 },
        offset: { x: 0, y: 0, z: 0 },
      },
      1: {
        width: '200px',
        height: '150px',
        translate: { x: '10px', y: '20px', z: '30px' },
        rotate: { x: 0, y: 0, z: 0 },
        offset: { x: '5%', y: '10%', z: '15px' },
      },
    }
    const align: AlignType = 'center'

    const result = transformCarouselLayoutInfoToStyle(info, align)

    expect(result.default).toBeDefined()
    expect(result[0]).toBeDefined()
    expect(result[1]).toBeDefined()
  })

  it('should correctly transform each layout info', () => {
    const info = {
      default: {
        width: 1,
        height: 1,
        translate: { x: 0, y: 0, z: 0 },
        rotate: { x: 0, y: 0, z: 0 },
        offset: { x: 0, y: 0, z: 0 },
      },
      0: {
        width: 0.5,
        height: 0.5,
        translate: { x: 0.2, y: 0.2, z: 0 },
        rotate: { x: 0, y: 1, z: 0 },
        offset: { x: 0, y: 0, z: 0 },
      },
    }
    const align: AlignType = 'top'

    const result = transformCarouselLayoutInfoToStyle(info, align)

    // 테스트: default 스타일 확인
    expect(result.default.width).toBe(
      `calc(1 * var(${CSS_VARIABLE.CONTAINER_WIDTH}))`
    )
    expect(result.default.height).toBe(
      `calc(1 * var(${CSS_VARIABLE.CONTAINER_HEIGHT}))`
    )

    // 테스트: 0번 스타일 확인
    expect(result[0].width).toBe(
      `calc(0.5 * var(${CSS_VARIABLE.CONTAINER_WIDTH}))`
    )
    expect(result[0].height).toBe(
      `calc(0.5 * var(${CSS_VARIABLE.CONTAINER_HEIGHT}))`
    )
  })
})

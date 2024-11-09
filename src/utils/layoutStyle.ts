import { AlignType } from '../components/Carousel/Carousel'
import CSS_VARIABLE from '../constant/css'

export type LayoutInfo = {
  width: number | string // if it's a number, it's proportional to container width
  height: number | string // if it's a number, it's proportional to container height
  translate: {
    x: number | string // if it's a number, it's proportional to container width
    y: number | string // if it's a number, it's proportional to container height
    z: number | string // if it's a number, it's proportional to container width
  }
  rotation: {
    x: number // deg
    y: number // deg
    z: number // deg
  }
  offset: {
    x: number | string // if it's a number, it's proportional to item width
    y: number | string // if it's a number, it's proportional to item height
    z: number | string // if it's a number, it's proportional to item width
  }
}

export type CarouselLayoutInfo = {
  default: LayoutInfo
  [key: number]: LayoutInfo
}

export type LayoutStyle = {
  width: string
  height: string
  transform: string
}

export type CarouselLayoutStyle = {
  default: LayoutStyle
  [key: number]: LayoutStyle
}

/**
 * Transform layout info to CSS style
 */
export const transformLayoutInfoToStyle = (
  info: LayoutInfo,
  align: AlignType
): LayoutStyle => {
  const { width, height, translate, rotation, offset } = info

  // Transform width
  const newWidth =
    typeof width === 'number'
      ? `calc(${width} * var(${CSS_VARIABLE.CONTAINER_WIDTH}))`
      : width

  // Transform height
  const newHeight =
    typeof height === 'number'
      ? `calc(${height} * var(${CSS_VARIABLE.CONTAINER_HEIGHT}))`
      : height

  // Set init initTranslateY depend on the align
  let initTranslateY: number
  switch (align) {
    case 'top':
      initTranslateY = 0
      break
    case 'bottom':
      initTranslateY = -100
      break
    case 'center':
      initTranslateY = -50
      break
  }

  // Transform rotation
  const magnitude = Math.sqrt(
    rotation.x ** 2 + rotation.y ** 2 + rotation.z ** 2
  )
  const nx = magnitude ? rotation.x / magnitude : 0
  const ny = magnitude ? rotation.y / magnitude : 0
  const nz = magnitude ? rotation.z / magnitude : 0

  // Transform translate
  const translateX =
    typeof translate.x === 'number'
      ? `${translate.x} * var(${CSS_VARIABLE.CONTAINER_WIDTH})`
      : translate.x
  const translateY =
    typeof translate.y === 'number'
      ? `${translate.y} * var(${CSS_VARIABLE.CONTAINER_HEIGHT})`
      : translate.y
  const translateZ =
    typeof translate.z === 'number'
      ? `${translate.z} * var(${CSS_VARIABLE.CONTAINER_WIDTH})`
      : translate.z

  // Transform offset
  const offsetX = typeof offset.x === 'number' ? `${offset.x} * 100%` : offset.x
  const offsetY = typeof offset.y === 'number' ? `${offset.y} * 100%` : offset.y
  const offsetZ =
    typeof offset.z === 'number'
      ? `${offset.z} * var(${CSS_VARIABLE.ITEM_WIDTH})`
      : offset.z

  return {
    width: newWidth,
    height: newHeight,
    transform: `translate(-50%, ${initTranslateY}%) 
  translate3d(calc(${translateX} + ${offsetX}), calc(${translateY} + ${offsetY}), calc(${translateZ} + ${offsetZ})) 
  rotate3d(${nx}, ${ny}, ${nz}, calc(${magnitude}deg)`,
  }
}

/**
 * Transform carousel layout info to CSS style
 */
export const transformCarouselLayoutInfoToStyle = (
  info: CarouselLayoutInfo,
  align: AlignType
): CarouselLayoutStyle => {
  const style: { [key: string]: LayoutStyle } = {}

  for (const key in info) {
    style[key] = transformLayoutInfoToStyle(info[key], align)
  }

  return style as CarouselLayoutStyle
}

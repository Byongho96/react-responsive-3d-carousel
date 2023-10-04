/*
  Current Carousel Style
*/
export function getCurItemStyle() {
  return {
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    opacity: '1',
  }
}

export function getDefaultItemStyle(width: string, depth: number) {
  return {
    left: '50%',
    transform: `translate3d(-50%, 0, calc(-300px * ${depth}))`,
    opacity: '0',
  }
}

/*
  Three Carousel Style
*/
export function getThreeCarouselPrevItemStyle(width: string, depth: number) {
  const radians = 30 * (Math.PI / 180)
  return {
    left: `calc(-10px * ${depth} - ${width} * 0.11)`,
    transform: `
     translate3d(0, 0, calc(-120px * ${depth} - ${width} * 0.35)) 
     rotateY(${radians}rad)
     `,
    opacity: '1',
  }
}

export function getThreeCarouselNextItemStyle(width: string, depth: number) {
  const radians = 30 * (Math.PI / 180)
  return {
    left: `calc(100% + 10px * ${depth} + ${width} * 0.11)`,
    transform: `
      translate3d(-100%, 0, calc(-120px * ${depth} - ${width} * 0.35)) 
      rotateY(-${radians}rad)
    `,
    opacity: '1',
  }
}

/*
  Five Carousel Style
  */
export function getFiveCarouselPrevItemStyle(width: string, depth: number) {
  const radians = 30 * (Math.PI / 180)
  return {
    left: `calc(calc(100% - ${width}) / 4 - 18px * ${depth} - ${width} * 0.09)`,
    transform: `
      translate3d(0, 0, calc(-100px * ${depth} - ${width} * 0.3)) 
      rotateY(${radians}rad)
    `,
    opacity: '1',
  }
}

export function getFiveCarouselNextItemStyle(width: string, depth: number) {
  const radians = 30 * (Math.PI / 180)
  return {
    left: `calc(100% - calc(100% - ${width}) / 4 + 18px * ${depth} + ${width} * 0.09)`,
    transform: `
      translate3d(-100%, 0, calc(-100px * ${depth} - ${width} * 0.3)) 
      rotateY(-${radians}rad)
    `,
    opacity: '1',
  }
}

export function getFiveCarouselDoublePrevItemStyle(
  width: string,
  depth: number
) {
  const radians = 45 * (Math.PI / 180)
  return {
    left: `calc(-25px * ${depth} - ${width} * 0.16)`,
    transform: `
     translate3d(0, 0, calc(-150px * ${depth} - ${width} * 0.4)) 
     rotateY(${radians}rad)
     `,
    opacity: '1',
  }
}

export function getFiveCarouselDoubleNextItemStyle(
  width: string,
  depth: number
) {
  const radians = 45 * (Math.PI / 180)
  return {
    left: `calc(100% + 25px * ${depth} + ${width} * 0.16)`,
    transform: `
     translate3d(-100%, 0, calc(-150px * ${depth} - ${width} * 0.4)) 
     rotateY(-${radians}rad)
     `,
    opacity: '1',
  }
}

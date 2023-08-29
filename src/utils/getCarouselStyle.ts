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
    transform: `translate3d(-50%, 0, calc(-200px * ${depth}))`,
    opacity: '0',
  }
}

/*
  Three Carousel Style
*/
export function getThreeCarouselPrevItemStyle(width: string, depth: number) {
  const radians = 30 * (Math.PI / 180)
  return {
    left: '0',
    transform: `
     translate3d(0, 0, calc(-150px * ${depth})) 
     rotateY(${radians}rad)
     `,
    opacity: '1',
  }
}

export function getThreeCarouselNextItemStyle(width: string, depth: number) {
  const radians = 30 * (Math.PI / 180)
  return {
    left: '100%',
    transform: `
      translate3d(-100%, 0, calc(-150px * ${depth})) 
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
    left: `calc(calc(100% - ${width}) / 4)`,
    transform: `
      translate3d(0, 0, calc(-120px * ${depth})) 
      rotateY(${radians}rad)
    `,
    opacity: '1',
  }
}

export function getFiveCarouselNextItemStyle(width: string, depth: number) {
  const radians = 30 * (Math.PI / 180)
  return {
    left: `calc(100% - calc(100% - ${width}) / 4)`,
    transform: `
      translate3d(-100%, 0, calc(-120px * ${depth})) 
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
    left: '0',
    transform: `
     translate3d(0, 0, calc(-160px * ${depth})) 
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
    left: '100%',
    transform: `
     translate3d(-100%, 0, calc(-160px * ${depth})) 
     rotateY(-${radians}rad)
     `,
    opacity: '1',
  }
}

import { CarouselLayoutInfo } from '../utils/layoutStyle'

export const DEFAULT_TWO_CAROUSEL_INDEX_TRANSFORM: CarouselLayoutInfo = {
  default: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0,
      y: 0,
      z: -1,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    offset: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
  0: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    offset: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
}

export const DEFAULT_THREE_CAROUSEL_INDEX_TRANSFORM: CarouselLayoutInfo = {
  default: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0,
      y: 0,
      z: -1,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    offset: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
  '-1': {
    width: 'auto',
    height: 'auto',
    translate: {
      x: -0.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 40,
      z: 0,
    },
    offset: {
      x: 0.5 * Math.cos(40 * (Math.PI / 180)),
      y: 0,
      z: -1 * Math.sin(30 * (Math.PI / 180)),
    },
  },
  0: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    offset: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
  1: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: -40,
      z: 0,
    },
    offset: {
      x: -0.5 * Math.cos(40 * (Math.PI / 180)),
      y: 0,
      z: -1 * Math.sin(30 * (Math.PI / 180)),
    },
  },
}

export const DEFAULT_FIVE_CAROUSEL_INDEX_TRANSFORM: CarouselLayoutInfo = {
  default: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0,
      y: 0,
      z: -1,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    offset: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
  '-2': {
    width: 'auto',
    height: 'auto',
    translate: {
      x: -0.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 40,
      z: 0,
    },
    offset: {
      x: 0.5 * Math.cos(40 * (Math.PI / 180)),
      y: 0,
      z: -1 * Math.sin(40 * (Math.PI / 180)),
    },
  },
  '-1': {
    width: 'auto',
    height: 'auto',
    translate: {
      x: -0.25,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 20,
      z: 0,
    },
    offset: {
      x: 0.25 * Math.cos(40 * (Math.PI / 180)),
      y: 0,
      z: -0.5 * Math.sin(40 * (Math.PI / 180)),
    },
  },
  0: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    offset: {
      x: 0,
      y: 0,
      z: 0,
    },
  },

  1: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0.25,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: -20,
      z: 0,
    },
    offset: {
      x: -0.25 * Math.cos(40 * (Math.PI / 180)),
      y: 0,
      z: -0.5 * Math.sin(40 * (Math.PI / 180)),
    },
  },
  2: {
    width: 'auto',
    height: 'auto',
    translate: {
      x: 0.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: -40,
      z: 0,
    },
    offset: {
      x: -0.5 * Math.cos(40 * (Math.PI / 180)),
      y: 0,
      z: -1 * Math.sin(40 * (Math.PI / 180)),
    },
  },
}

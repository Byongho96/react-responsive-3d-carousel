import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import narrowJpgSrc from '../../assets/narrow-image.jpg'
import videoSrc from '../../assets/sample-video.mp4'
import squareJpgSrc from '../../assets/square-image.jpg'
import wideJpgSrc from '../../assets/wide-image.jpg'
import Carousel, { CarouselProps } from './Carousel'

const meta: Meta = {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    width: '400px',
    height: '300px',
    align: 'center',
    perspective: 'auto',
    perspectiveOrigin: 'center',
    boxShadow: '0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)',
    containerWidth: '100%',
    containerHeight: 'auto',
    containerPadding: '1rem',
    'defaultOption.widthFactor': 1,
    'defaultOption.depthFactor': 1,
    'defaultOption.angleFactor': 1,
    autoPlay: true,
    interval: 3000,
    transformDuration: 1000,
    transformTimingFn: 'ease-in-out',
    infiniteLoop: true,
    focusOnSelect: true,
    pauseOnHover: true,
    slideWithKeyboard: 'both',
    swipeable: true,
    swipeDirection: 'horizontal',
    showStatus: true,
    showArrows: true,
    showIndicators: true,
  },
  argTypes: {
    'defaultOption.widthFactor': { type: 'number', min: 0, max: 2, step: 0.1 },
    'defaultOption.depthFactor': { type: 'number', min: 0, max: 5, step: 0.1 },
    'defaultOption.angleFactor': { type: 'number', min: 0, max: 2, step: 0.1 },
    interval: { control: { type: 'number', min: 0, max: 10000, step: 100 } },
    transitionDuration: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
    },
    children: { table: { disable: true } },
    ariaLabel: { table: { disable: true } },
    items: { table: { disable: true } },
    layout: { table: { disable: true } },
    defaultOption: { table: { disable: true } },
    startIndex: { table: { disable: true } },
    autoFocus: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onClickItem: { table: { disable: true } },
    onSwipeStart: { table: { disable: true } },
    onSwipeMove: { table: { disable: true } },
    onSwipeEnd: { table: { disable: true } },
    indicators: { table: { disable: true } },
    arrows: { table: { disable: true } },
    status: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
export default meta

type CarouselStory = StoryObj<
  CarouselProps & {
    'defaultOption.widthFactor': number
    'defaultOption.depthFactor': number
    'defaultOption.angleFactor': number
  }
>

const defaultRender = (
  args: CarouselProps & {
    'defaultOption.widthFactor': number
    'defaultOption.depthFactor': number
    'defaultOption.angleFactor': number
  }
) => {
  return (
    <Carousel
      {...args}
      defaultOption={{
        numOfSlides: 'auto',
        angleFactor: args['defaultOption.angleFactor'],
        depthFactor: args['defaultOption.depthFactor'],
        widthFactor: args['defaultOption.widthFactor'],
      }}
    />
  )
}

export const DefaultTwo: CarouselStory = {
  args: {
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={squareJpgSrc} alt="Sample Square" />,
    ],
  },
  render: defaultRender,
}

export const DefaultThree: CarouselStory = {
  args: {
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={squareJpgSrc} alt="Sample Square" />,
      <img key="3" src={squareJpgSrc} alt="Sample Square" />,
    ],
  },
  render: defaultRender,
}

export const DefaultFive: CarouselStory = {
  args: {
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={squareJpgSrc} alt="Sample Square" />,
      <img key="3" src={squareJpgSrc} alt="Sample Square" />,
      <img key="4" src={squareJpgSrc} alt="Sample Square" />,
      <img key="5" src={squareJpgSrc} alt="Sample Square" />,
    ],
  },
  render: defaultRender,
}

export const VariousSize: CarouselStory = {
  args: {
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />,
      <img key="3" src={wideJpgSrc} alt="Sample Wide" />,
    ],
  },
  render: defaultRender,
}

export const AutoWidth: CarouselStory = {
  args: {
    width: 'auto',
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />,
      <img key="3" src={wideJpgSrc} alt="Sample Wide" />,
    ],
  },
  render: defaultRender,
}

export const AutoHeight: CarouselStory = {
  args: {
    containerHeight: '500px',
    width: '350px',
    height: 'auto',
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />,
      <img key="3" src={wideJpgSrc} alt="Sample Wide" />,
    ],
  },
  render: defaultRender,
}

export const AutoWidthHeight: CarouselStory = {
  args: {
    containerHeight: '450px',
    width: 'auto',
    height: 'auto',
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={narrowJpgSrc} alt="Sample Narrow" />,
      <img key="3" src={wideJpgSrc} alt="Sample Wide" />,
    ],
  },
  render: defaultRender,
}

export const VariousItem: CarouselStory = {
  args: {
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <video key="2" src={videoSrc} loop autoPlay aria-label="Sample Video" />,
      <div
        key="3"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          fontSize: '2rem',
        }}
      >
        Hello Dev
      </div>,
    ],
  },
  render: defaultRender,
}

export const CustomLayoutWithChildren: CarouselStory = {
  args: {
    children: (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          backgroundColor: 'skyblue',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        Children
      </div>
    ),
    items: [
      <img key="1" src={squareJpgSrc} alt="Sample Square" />,
      <img key="2" src={squareJpgSrc} alt="Sample Square" />,
      <img key="3" src={squareJpgSrc} alt="Sample Square" />,
      <img key="4" src={squareJpgSrc} alt="Sample Square" />,
      <img key="5" src={squareJpgSrc} alt="Sample Square" />,
    ],
    containerHeight: '400px',
    containerPadding: '0 1rem 3rem',
    perspectiveOrigin: 'top',
    boxShadow: '0 0.05rem 0.25rem rgba(0, 0, 0, 0.5)',
    sizeDuration: 1000,
    sizeTimingFn: 'ease-in-out',
    layout: {
      default: {
        width: '100px',
        height: '100px',
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
        width: '125px',
        height: '225px',
        translate: {
          x: -0.25,
          y: 0,
          z: -0.25 * Math.tan(72 * (Math.PI / 180)),
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        offset: {
          x: 0.25,
          y: 0,
          z: 0,
        },
      },
      '-1': {
        width: '150px',
        height: '150px',
        translate: {
          x: -0.5,
          y: 0,
          z: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        offset: {
          x: 0.5,
          y: 0,
          z: 0,
        },
      },
      0: {
        width: '225px',
        height: '125px',
        translate: {
          x: 0,
          y: 0,
          z: 0.5 * Math.tan(36 * (Math.PI / 180)),
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
        width: '150px',
        height: '150px',
        translate: {
          x: 0.5,
          y: 0,
          z: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        offset: {
          x: -0.5,
          y: 0,
          z: 0,
        },
      },
      2: {
        width: '125px',
        height: '225px',
        translate: {
          x: 0.25,
          y: 0,
          z: -0.25 * Math.tan(72 * (Math.PI / 180)),
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        offset: {
          x: -0.25,
          y: 0,
          z: 0,
        },
      },
    },
  },
  render: defaultRender,
}

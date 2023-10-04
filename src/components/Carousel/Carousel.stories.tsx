import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from './Carousel'
import squareImageSrc from '../../assets/sample-square-image.png'
import wideImageSrc from '../../assets/sample-wide-image.png'
import narrowImageSrc from '../../assets/sample-narrow-image.png'
import videoSrc from '../../assets/sample-video.mp4'

export default {
  title: 'responsive-3d-carousel/Carousel',
  component: Carousel,
  argTypes: {
    numberOfItems: { type: 'number' },
  },
  args: {
    numberOfItems: 5,
  },
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = ({
  numberOfItems,
  ...args
}) => (
  <Carousel {...args}>
    {[...Array(numberOfItems).keys()].map((_, index) => (
      <img
        src={squareImageSrc}
        alt={`sample-square-image-${index + 1}`}
        key={`${index}-${squareImageSrc}`}
      />
    ))}
  </Carousel>
)

const WideTemplate: ComponentStory<typeof Carousel> = ({
  numberOfItems,
  ...args
}) => (
  <Carousel {...args}>
    {[...Array(numberOfItems).keys()].map((_, index) => (
      <img
        src={wideImageSrc}
        alt={`sample-wide-image-${index + 1}`}
        key={`${index}-${wideImageSrc}`}
      />
    ))}
  </Carousel>
)

const NarrowTemplate: ComponentStory<typeof Carousel> = ({
  numberOfItems,
  ...args
}) => (
  <Carousel {...args}>
    {[...Array(numberOfItems).keys()].map((_, index) => (
      <img
        src={narrowImageSrc}
        alt={`sample-narrow-image-${index + 1}`}
        key={`${index}-${squareImageSrc}`}
      />
    ))}
  </Carousel>
)

const VariousTemplate: ComponentStory<typeof Carousel> = ({ ...args }) => (
  <Carousel {...args}>
    <img src={squareImageSrc} alt={`sample-square-image`} />
    <img src={wideImageSrc} alt={`sample-wide-image`} />
    <a href="https://unsplash.com/">
      <img
        src={narrowImageSrc}
        alt={`sample-narrow-image`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </a>
    <video
      src={videoSrc}
      alt={`sample-video`}
      muted
      autoPlay
      loop
      controls={true}
    />
    <iframe src="https://www.youtube.com/embed/Rrf8uQFvICE" />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <p>Hello</p>
    </div>
  </Carousel>
)

export const CarouselWithSquareImage = Template.bind({})
CarouselWithSquareImage.args = {}

export const CarouselWithWideImage = WideTemplate.bind({})
CarouselWithWideImage.args = {}

export const CarouselWithNarrowImage = NarrowTemplate.bind({})
CarouselWithNarrowImage.args = {}

export const CarouselWithVariousTags = VariousTemplate.bind({})
CarouselWithVariousTags.args = {}

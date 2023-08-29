import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from './Carousel'
import imageFile from '../../assets/sample-image.png'

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
        src={imageFile}
        alt={`sample-image-${index + 1}`}
        key={`${index}-${imageFile}`}
      />
    ))}
  </Carousel>
)

export const DefaultCarousel = Template.bind({})
DefaultCarousel.args = {}

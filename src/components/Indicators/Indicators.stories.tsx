import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Indicators from './Indicators'

export default {
  title: 'responsive-3d-carousel/Indicators',
  component: Indicators,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Indicators>

const Template: ComponentStory<typeof Indicators> = (args) => (
  <Indicators {...args} />
)

export const SmallIndicators = Template.bind({})
SmallIndicators.args = {
  length: 5,
  index: 0,
  size: 'small',
}

export const MeduimIndicators = Template.bind({})
MeduimIndicators.args = {
  length: 5,
  index: 0,
  size: 'medium',
}

export const LargeIndicators = Template.bind({})
LargeIndicators.args = {
  length: 5,
  index: 0,
  size: 'large',
}

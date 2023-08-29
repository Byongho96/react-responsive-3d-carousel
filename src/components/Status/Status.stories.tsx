import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Status from './Status'

export default {
  title: 'responsive-3d-carousel/Status',
  component: Status,
} as ComponentMeta<typeof Status>

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />

export const SmallStatus = Template.bind({})
SmallStatus.args = {
  length: 5,
  index: 0,
  size: 'small',
}

export const MediumStatus = Template.bind({})
MediumStatus.args = {
  length: 5,
  index: 0,
  size: 'medium',
}

export const LargeStatus = Template.bind({})
LargeStatus.args = {
  length: 5,
  index: 0,
  size: 'large',
}

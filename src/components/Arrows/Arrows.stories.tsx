import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Arrows from './Arrows'

export default {
  title: 'responsive-3d-carousel/Arrows',
  component: Arrows,
  argTypes: {
    onClickLeft: { action: 'onClickLeft' },
    onClickRight: { action: 'onClickRight' },
  },
} as ComponentMeta<typeof Arrows>

const Template: ComponentStory<typeof Arrows> = (args) => <Arrows {...args} />

export const DefaultArrows = Template.bind({})
DefaultArrows.args = {}

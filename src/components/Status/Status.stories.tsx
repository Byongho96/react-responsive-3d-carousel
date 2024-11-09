import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Status, { StatusProps } from './Status'
import './Status.scss'

const meta: Meta<typeof Status> = {
  title: 'Components/Status',
  component: Status,
  argTypes: {
    length: { control: { type: 'number', min: 1 } },
    curIndex: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
export default meta

type StatusStory = StoryObj<StatusProps>

export const Default: StatusStory = {
  args: {
    length: 5,
    curIndex: 0,
  },
}

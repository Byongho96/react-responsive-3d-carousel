import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import Indicators, { IndicatorsProps } from './Indicators'

const meta: Meta<typeof Indicators> = {
  title: 'Components/Indicators',
  component: Indicators,
  argTypes: {
    length: { control: { type: 'number', min: 1 } },
    curIndex: { table: { disable: true } },
    onClick: { table: { disable: true } },
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

type IndicatorsStory = StoryObj<IndicatorsProps>

export const Default: IndicatorsStory = {
  args: {
    length: 5,
    translate: ['0px', '0px'],
  },
  render: (args) => {
    const [curIndex, setCurIndex] = useState(0)

    const handleClick = (_: React.MouseEvent, index: number) => {
      action('onClick')(index)
      setCurIndex(index)
    }

    return (
      <Indicators
        {...args}
        curIndex={curIndex}
        onClick={handleClick} // 클릭 시 curIndex 업데이트
      />
    )
  },
}

export const CustomIcon: IndicatorsStory = {
  args: {
    ...Default.args,
    width: '1rem',
    height: '1rem',
    indicatorIcon: (
      <svg
        preserveAspectRatio="none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  render: Default.render,
}

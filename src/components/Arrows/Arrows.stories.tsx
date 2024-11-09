import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Arrows, { ArrowsProps } from './Arrows'
import './Arrows.scss'

const meta: Meta<typeof Arrows> = {
  title: 'Components/Arrows',
  component: Arrows,
  args: {},
  argTypes: {
    onClickNext: { table: { disable: true } },
    onClickPrev: { table: { disable: true } },
    prevIcon: { table: { disable: true } },
    nextIcon: { table: { disable: true } },
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

type ArrowsStory = StoryObj<ArrowsProps>

export const Default: ArrowsStory = {
  args: {},
}

export const Translate: ArrowsStory = {
  args: {
    ...Default.args,
    prevArrowTranslate: ['100px', '-100px'],
    nextArrowTranslate: ['-100px', '100px'],
  },
}

export const CustomIcon: ArrowsStory = {
  args: {
    ...Default.args,
    width: '3rem',
    height: '3rem',
    prevIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 8 8 12 12 16"></polyline>
        <line x1="16" y1="12" x2="8" y2="12"></line>
      </svg>
    ),
    nextIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 16 16 12 12 8"></polyline>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
  },
}

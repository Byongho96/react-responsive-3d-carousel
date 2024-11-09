import React from 'react'
import { render } from '@testing-library/react'
import Status, { StatusProps } from './Status'
import '@testing-library/jest-dom'

describe('Status Component', () => {
  const defaultProps: StatusProps = {
    length: 5,
    curIndex: 2,
  }

  it('renders correctly with default props', () => {
    const { getByText } = render(<Status {...defaultProps} />)
    const statusElement = getByText(
      `${defaultProps.curIndex + 1} / ${defaultProps.length}`
    )

    expect(statusElement).toBeInTheDocument()
    expect(statusElement).toHaveTextContent('3 / 5')
  })

  it('applies custom styles when props are provided', () => {
    const customProps: StatusProps = {
      ...defaultProps,
      color: '#000000',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      shadow: '0 0.1rem 0.2rem rgba(0, 0, 0, 0.7)',
      translate: ['10px', '20px'],
    }

    const { getByText } = render(<Status {...customProps} />)
    const statusElement = getByText('3 / 5')

    expect(statusElement).toHaveStyle(`color: ${customProps.color}`)
    expect(statusElement).toHaveStyle(`font-size: ${customProps.fontSize}`)
    expect(statusElement).toHaveStyle(`font-weight: ${customProps.fontWeight}`)
    expect(statusElement).toHaveStyle(`text-shadow: ${customProps.shadow}`)
    expect(statusElement).toHaveStyle(
      `transform: translate(${customProps.translate![0]}, ${customProps.translate![1]})`
    )
  })

  it('updates content when curIndex and length change', () => {
    const updatedProps: StatusProps = {
      length: 10,
      curIndex: 7,
    }

    const { getByText, rerender } = render(<Status {...updatedProps} />)
    const statusElement = getByText('8 / 10')

    expect(statusElement).toBeInTheDocument()
    expect(statusElement).toHaveAttribute('aria-label', '8 of 10')

    // Update props
    rerender(<Status length={updatedProps.length} curIndex={9} />)
    const updatedStatusElement = getByText('10 / 10')

    expect(updatedStatusElement).toBeInTheDocument()
    expect(updatedStatusElement).toHaveAttribute('aria-label', '10 of 10')
  })

  it('uses default styles when optional props are not provided', () => {
    const { getByText } = render(<Status length={5} curIndex={0} />)
    const statusElement = getByText('1 / 5')

    expect(statusElement).toHaveStyle('color: #ffffff')
    expect(statusElement).toHaveStyle('font-size: 1rem')
    expect(statusElement).toHaveStyle('font-weight: 600')
    expect(statusElement).toHaveStyle(
      'text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)'
    )
    expect(statusElement).toHaveStyle('transform: translate(0px, 0px)')
  })
})

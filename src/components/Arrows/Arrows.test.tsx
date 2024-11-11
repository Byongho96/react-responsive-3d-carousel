import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Arrows, { ArrowsProps } from './Arrows'
import '@testing-library/jest-dom'

describe('Arrows Component', () => {
  const defaultProps: ArrowsProps = {
    onClickNext: jest.fn(),
    onClickPrev: jest.fn(),
  }

  it('renders correctly with default props', () => {
    const { getByLabelText } = render(<Arrows {...defaultProps} />)
    const prevButton = getByLabelText('previous slide')
    const nextButton = getByLabelText('next slide')

    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('calls onClickPrev when prev button is clicked', () => {
    const { getByLabelText } = render(<Arrows {...defaultProps} />)
    const prevButton = getByLabelText('previous slide')

    fireEvent.click(prevButton)
    expect(defaultProps.onClickPrev).toHaveBeenCalled()
  })

  it('calls onClickNext when next button is clicked', () => {
    const { getByLabelText } = render(<Arrows {...defaultProps} />)
    const nextButton = getByLabelText('next slide')

    fireEvent.click(nextButton)
    expect(defaultProps.onClickNext).toHaveBeenCalled()
  })

  it('renders custom icons when provided', () => {
    const CustomPrevIcon = () => <div>Custom Prev Icon</div>
    const CustomNextIcon = () => <div>Custom Next Icon</div>

    const { getByText } = render(
      <Arrows
        {...defaultProps}
        prevIcon={<CustomPrevIcon />}
        nextIcon={<CustomNextIcon />}
      />
    )

    expect(getByText('Custom Prev Icon')).toBeInTheDocument()
    expect(getByText('Custom Next Icon')).toBeInTheDocument()
  })

  it('applies custom styles when props are provided', () => {
    const { container } = render(
      <Arrows
        {...defaultProps}
        width="4rem"
        height="6rem"
        color="#000000"
        hoverColor="#333333"
        shadow="0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"
      />
    )

    const arrowsDiv = container.querySelector(
      '.react-responsive-3d-carousel__arrows'
    )
    expect(arrowsDiv).toHaveStyle('--arrow-width: 4rem')
    expect(arrowsDiv).toHaveStyle('--arrow-height: 6rem')
    expect(arrowsDiv).toHaveStyle('--arrow-color: #000000')
    expect(arrowsDiv).toHaveStyle('--arrow-hover-color: #333333')
    expect(arrowsDiv).toHaveStyle(
      '--arrow-drop-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)'
    )
  })
})

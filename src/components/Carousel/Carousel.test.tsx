import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Carousel, { CarouselProps } from './Carousel'
import '@testing-library/jest-dom'

describe('Carousel Component', () => {
  const items = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
  ]

  const defaultProps: CarouselProps = {
    items,
  }

  it('renders correctly with default props', () => {
    const { container } = render(<Carousel {...defaultProps} />)
    const carouselContainer = container.querySelector(
      '.react-responsive-3d-carousel'
    )
    expect(carouselContainer).toBeInTheDocument()

    // 기본적으로 showArrows, showIndicators, showStatus는 true입니다.
    const arrowsContainer = container.querySelector(
      '.react-responsive-3d-carousel__arrows-container'
    )
    expect(arrowsContainer).toBeInTheDocument()

    const indicatorsContainer = container.querySelector(
      '.react-responsive-3d-carousel__indicators-container'
    )
    expect(indicatorsContainer).toBeInTheDocument()

    const statusContainer = container.querySelector(
      '.react-responsive-3d-carousel__status-container'
    )
    expect(statusContainer).toBeInTheDocument()
  })

  it('renders the correct number of items', () => {
    const { container } = render(<Carousel {...defaultProps} />)
    const itemElements = container.querySelectorAll(
      '.react-responsive-3d-carousel__item'
    )
    expect(itemElements.length).toBe(items.length)
  })

  it('hides arrows when showArrows is false', () => {
    const props: CarouselProps = {
      ...defaultProps,
      showArrows: false,
    }
    const { container } = render(<Carousel {...props} />)
    const arrowsContainer = container.querySelector(
      '.react-responsive-3d-carousel__arrows-container'
    )
    expect(arrowsContainer).not.toBeInTheDocument()
  })

  it('hides indicators when showIndicators is false', () => {
    const props: CarouselProps = {
      ...defaultProps,
      showIndicators: false,
    }
    const { container } = render(<Carousel {...props} />)
    const indicatorsContainer = container.querySelector(
      '.react-responsive-3d-carousel__indicators-container'
    )
    expect(indicatorsContainer).not.toBeInTheDocument()
  })

  it('hides status when showStatus is false', () => {
    const props: CarouselProps = {
      ...defaultProps,
      showStatus: false,
    }
    const { container } = render(<Carousel {...props} />)
    const statusContainer = container.querySelector(
      '.react-responsive-3d-carousel__status-container'
    )
    expect(statusContainer).not.toBeInTheDocument()
  })

  it('calls onClickItem when an item is clicked', () => {
    const onClickItem = jest.fn()
    const props: CarouselProps = {
      ...defaultProps,
      onClickItem,
    }
    const { container } = render(<Carousel {...props} />)
    const itemElements = container.querySelectorAll(
      '.react-responsive-3d-carousel__item'
    )

    fireEvent.click(itemElements[1])
    expect(onClickItem).toHaveBeenCalled()
    expect(onClickItem).toHaveBeenCalledWith(
      expect.any(Object),
      1,
      expect.anything(),
      expect.any(Boolean)
    )
  })

  it('updates curIndex when an item is clicked if focusOnSelect is true', () => {
    const props: CarouselProps = {
      ...defaultProps,
      focusOnSelect: true,
      onChange: jest.fn(),
    }
    const { container } = render(<Carousel {...props} />)
    const itemElements = container.querySelectorAll(
      '.react-responsive-3d-carousel__item'
    )

    // Click the second item
    fireEvent.click(itemElements[1])

    expect(props.onChange).toHaveBeenCalledWith(1, expect.anything())
  })

  it('does not update curIndex when focusOnSelect is false', () => {
    const props: CarouselProps = {
      ...defaultProps,
      focusOnSelect: false,
      onChange: jest.fn(),
    }
    const { container } = render(<Carousel {...props} />)
    const itemElements = container.querySelectorAll(
      '.react-responsive-3d-carousel__item'
    )

    // Click the second item
    fireEvent.click(itemElements[1])

    expect(props.onChange).not.toHaveBeenCalled()
  })

  it('applies container styles based on props', () => {
    const props: CarouselProps = {
      ...defaultProps,
      containerWidth: '500px',
      containerHeight: '300px',
      containerPadding: '20px',
    }
    const { container } = render(<Carousel {...props} />)
    const carouselContainer = container.querySelector(
      '.react-responsive-3d-carousel'
    ) as HTMLElement

    expect(carouselContainer).toHaveStyle(`width: ${props.containerWidth}`)
    expect(carouselContainer).toHaveStyle(`height: ${props.containerHeight}`)
    expect(carouselContainer).toHaveStyle(`padding: ${props.containerPadding}`)
  })
})

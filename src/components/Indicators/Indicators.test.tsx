import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Indicators, { IndicatorsProps } from './Indicators'
import '@testing-library/jest-dom'

describe('Indicators Component', () => {
  const defaultProps: IndicatorsProps = {
    length: 5,
    curIndex: 2,
    onClick: jest.fn(),
  }

  it('renders the correct number of indicators', () => {
    const { getAllByRole } = render(<Indicators {...defaultProps} />)
    const indicators = getAllByRole('listitem')
    expect(indicators).toHaveLength(defaultProps.length)
  })

  it('applies the active class to the current indicator', () => {
    const { getAllByRole } = render(<Indicators {...defaultProps} />)
    const indicators = getAllByRole('listitem')
    indicators.forEach((indicator, index) => {
      if (index === defaultProps.curIndex) {
        expect(indicator).toHaveClass('active')
      } else {
        expect(indicator).not.toHaveClass('active')
      }
    })
  })

  it('calls onClick with the correct index when an indicator is clicked', () => {
    const { getAllByRole } = render(<Indicators {...defaultProps} />)
    const indicators = getAllByRole('listitem')
    fireEvent.click(indicators[1])
    expect(defaultProps.onClick).toHaveBeenCalledWith(expect.any(Object), 1);
  })

  it('renders custom indicator icon when provided', () => {
    const CustomIcon = () => <div>Custom Icon</div>
    const { getAllByText } = render(
      <Indicators {...defaultProps} indicatorIcon={<CustomIcon />} />
    )
    const customIcons = getAllByText('Custom Icon')
    expect(customIcons).toHaveLength(defaultProps.length)
  })

  it('applies custom styles when props are provided', () => {
    const customProps: IndicatorsProps = {
      ...defaultProps,
      gap: '2rem',
      color: '#000000',
      width: '1rem',
      height: '1rem',
      activeColor: '#ff0000',
      shadow: '0 0.1rem 0.2rem rgba(0, 0, 0, 0.7)',
      translate: ['10px', '20px'],
    }

    const { container } = render(<Indicators {...customProps} />)
    const indicatorsUl = container.querySelector(
      '.react-responsive-3d-carousel__indicators'
    ) as HTMLElement

    expect(indicatorsUl).toHaveStyle(`gap: ${customProps.gap}`)
    expect(indicatorsUl).toHaveStyle(
      `transform: translate(${customProps.translate![0]}, ${customProps.translate![1]})`
    )
    expect(indicatorsUl).toHaveStyle(`--indicator-width: ${customProps.width}`)
    expect(indicatorsUl).toHaveStyle(
      `--indicator-height: ${customProps.height}`
    )
    expect(indicatorsUl).toHaveStyle(`--indicator-color: ${customProps.color}`)
    expect(indicatorsUl).toHaveStyle(
      `--indicator-active-color: ${customProps.activeColor}`
    )
    expect(indicatorsUl).toHaveStyle(
      `--indicator-shadow: ${customProps.shadow}`
    )
  })

  it('uses default styles when optional props are not provided', () => {
    const { container } = render(
      <Indicators length={3} curIndex={0} onClick={jest.fn()} />
    )
    const indicatorsUl = container.querySelector(
      '.react-responsive-3d-carousel__indicators'
    ) as HTMLElement

    expect(indicatorsUl).toHaveStyle('gap: 1.5rem')
    expect(indicatorsUl).toHaveStyle('transform: translate(0px, 0px)')
    expect(indicatorsUl).toHaveStyle('--indicator-width: 0.6rem')
    expect(indicatorsUl).toHaveStyle('--indicator-height: 0.6rem')
    expect(indicatorsUl).toHaveStyle('--indicator-color: #ffffff')
    expect(indicatorsUl).toHaveStyle('--indicator-active-color: #888888')
    expect(indicatorsUl).toHaveStyle(
      '--indicator-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)'
    )
  })
})

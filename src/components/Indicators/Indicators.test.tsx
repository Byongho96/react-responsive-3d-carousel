import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Indicators from './Indicators'
import '@testing-library/jest-dom'

describe('The number of indicators', () => {
  test('render one indicator', () => {
    render(<Indicators length={1} index={0} />)
    const indicatorElements = screen.getAllByRole('listitem')
    expect(indicatorElements).toHaveLength(1)

    for (const indicatorEle of indicatorElements) {
      expect(indicatorEle).toBeInTheDocument()
    }
  })

  test('render three indicator', () => {
    render(<Indicators length={3} index={0} />)
    const indicatorElements = screen.getAllByRole('listitem')
    expect(indicatorElements).toHaveLength(3)

    for (const indicatorEle of indicatorElements) {
      expect(indicatorEle).toBeInTheDocument()
    }
  })

  test('render five indicator', () => {
    render(<Indicators length={5} index={0} />)
    const indicatorElements = screen.getAllByRole('listitem')
    expect(indicatorElements).toHaveLength(5)

    for (const indicatorEle of indicatorElements) {
      expect(indicatorEle).toBeInTheDocument()
    }
  })
})

describe('The size of indicators', () => {
  test('render small indicators', () => {
    const size = 'small'
    const { container } = render(
      <Indicators length={5} index={0} size={size} />
    )

    const indicatorEle = container.firstChild
    expect(indicatorEle).toBeInTheDocument()
    expect(indicatorEle).toHaveClass(size)
  })

  test('render medium indicators', () => {
    const size = 'medium'
    const { container } = render(
      <Indicators length={5} index={0} size={size} />
    )

    const indicatorEle = container.firstChild
    expect(indicatorEle).toBeInTheDocument()
    expect(indicatorEle).toHaveClass(size)
  })

  test('render large indicators', () => {
    const size = 'large'
    const { container } = render(
      <Indicators length={5} index={0} size={size} />
    )

    const indicatorEle = container.firstChild
    expect(indicatorEle).toBeInTheDocument()
    expect(indicatorEle).toHaveClass(size)
  })
})

describe('The color of indicators', () => {
  test('render five indicator with custom colors', () => {
    const length = 5
    const index = 3
    const activeColor = 'rgb(12, 23, 34)'
    const inactiveColor = 'rgb(34, 14, 88)'

    render(
      <Indicators
        length={length}
        index={index}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
      />
    )

    const indicatorElements = screen.getAllByRole('listitem')

    for (let i = 0; i < length; i++) {
      const indicatorEle = indicatorElements[i]
      expect(indicatorEle).toBeInTheDocument()

      const indicatorPath = indicatorEle.getElementsByTagName('path')[0]
      expect(indicatorPath).toHaveStyle(
        `fill :
        ${i === index ? activeColor : inactiveColor}`
      )
    }
  })
})

describe('Functions of Indicators', () => {
  const user = userEvent.setup()
  test('pass the index of the indicator as an arguemnt when clicked', async () => {
    const onClick = (i) => {
      console.log(i)
    }
    render(<Indicators length={5} index={0} onClick={onClick} />)

    const indicatorElements = screen.getAllByRole('listitem')

    for (let i = 0; i < length; i++) {
      const indicatorEle = indicatorElements[i]
      expect(indicatorEle).toBeInTheDocument()

      await user.click(indicatorEle)
      expect(onClick).toHaveBeenCalledWith(i)
    }
  })
})

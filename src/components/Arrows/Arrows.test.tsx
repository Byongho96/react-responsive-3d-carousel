import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Arrows from './Arrows'

describe('Render Arrows Properly', () => {
  test('render arrows', () => {
    render(<Arrows />)
    const arrowElements = screen.getAllByRole('button')
    expect(arrowElements).toHaveLength(2)

    for (const arrowEle of arrowElements) {
      expect(arrowEle).toBeInTheDocument()
    }
  })

  test('render arrows with custom size', () => {
    const width = '123px'
    const height = '24rem'

    render(<Arrows width={width} height={height} />)

    const arrowElements = screen.getAllByRole('button')

    for (const arrowEle of arrowElements) {
      expect(arrowEle).toBeInTheDocument()

      const arrowSvg = arrowEle.getElementsByTagName('svg')[0]
      expect(arrowSvg).toHaveStyle(`width: ${width}`)
      expect(arrowSvg).toHaveStyle(`height: ${height}`)
    }
  })
})

describe('Click event of arrows', () => {
  test('run the prop functions when clicked', async () => {
    const user = userEvent.setup()
    const onClickLeft = jest.fn()
    const onClickRight = jest.fn()
    render(<Arrows onClickLeft={onClickLeft} onClickRight={onClickRight} />)

    const arrowElements = screen.getAllByRole('button')
    const leftArrowEle = arrowElements[0]
    const rightArrowEle = arrowElements[1]

    await user.click(leftArrowEle)
    expect(leftArrowEle).toBeInTheDocument()
    expect(onClickLeft).toHaveBeenCalledTimes(1)
    expect(onClickRight).toHaveBeenCalledTimes(0)

    await user.click(rightArrowEle)
    expect(rightArrowEle).toBeInTheDocument()
    expect(onClickLeft).toHaveBeenCalledTimes(1)
    expect(onClickRight).toHaveBeenCalledTimes(1)
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import Status from './Status'
import '@testing-library/jest-dom'

describe('The value of status', () => {
  test('render status with the right text', () => {
    const length = 5
    const index = 2
    const { container } = render(<Status length={length} index={index} />)

    expect(container).toBeInTheDocument()
    expect(container.textContent).toBe(`${index + 1} / ${length}`)
  })
})

describe('The size of status', () => {
  test('render status with small size', () => {
    const size = 'small'
    const { container } = render(<Status length={5} index={0} size={size} />)

    const statusEle = container.firstChild
    expect(statusEle).toBeInTheDocument()
    expect(statusEle).toHaveClass(size)
  })

  test('render status with medium size', () => {
    const size = 'medium'
    const { container } = render(<Status length={5} index={0} size={size} />)

    const statusEle = container.firstChild
    expect(statusEle).toBeInTheDocument()
    expect(statusEle).toHaveClass(size)
  })

  test('render status with large size', () => {
    const size = 'large'
    const { container } = render(<Status length={5} index={0} size={size} />)

    const statusEle = container.firstChild
    expect(statusEle).toBeInTheDocument()
    expect(statusEle).toHaveClass(size)
  })
})

describe('The color of status', () => {
  test('render status with custom color', () => {
    const expectedColor = 'rgb(12, 34, 56)'
    const { container } = render(
      <Status length={5} index={0} color={expectedColor} />
    )

    const statusEle = container.firstChild
    expect(statusEle).toBeInTheDocument()
    expect(statusEle).toHaveStyle(`color: ${expectedColor}`)
  })
})

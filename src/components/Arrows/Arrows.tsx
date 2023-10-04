import React, { useEffect, useRef } from 'react'

import './Arrows.scss'

export interface ArrowsProps {
  onClickLeft: () => void
  onClickRight: () => void
  width?: string
  height?: string
  defaultColor?: string
  hoveredColor?: string
  strokeWidth?: number
  isShadow?: boolean
}

/**
 * Arrows on both sides of the carousel
 * @param onClickLeft Function to run when left arrow clicked
 * @param onClickRight Function to run when right arrow clicked
 * @param width Width of an arrow
 * @param height Height of an arrow
 * @param defaultColor Color of arrows not hovered
 * @param hoveredColor Color of arrows hovered
 * @param isShadow Is there shadow in the arrows
 */
const Arrows: React.FC<ArrowsProps> = ({
  onClickLeft,
  onClickRight,
  width = '48px',
  height = '83px',
  defaultColor = 'rgb(255, 255, 255)',
  hoveredColor = 'rgba(34, 34, 34, 0.53)',
  strokeWidth = 5,
  isShadow = true,
}) => {
  const leftArrowRef = useRef<HTMLButtonElement>(null)
  const rightArrowRef = useRef<HTMLButtonElement>(null)

  // Set the '--default-color' & '--hover-color' css variables
  useEffect(() => {
    const leftArrow = leftArrowRef.current as HTMLButtonElement
    const rightArrow = rightArrowRef.current as HTMLButtonElement

    leftArrow.style.setProperty('--default-color', defaultColor)
    leftArrow.style.setProperty('--hover-color', hoveredColor)
    rightArrow.style.setProperty('--default-color', defaultColor)
    rightArrow.style.setProperty('--hover-color', hoveredColor)
  }, [defaultColor, hoveredColor])

  return (
    <>
      <button
        className={`react-responsive-3d-carousel__arrows left ${
          isShadow ? 'shadow' : ''
        }`}
        onClick={onClickLeft}
        ref={leftArrowRef}
        type="button"
        aria-label="previous slide"
      >
        {/* left arrow svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          preserveAspectRatio="none"
          style={{ width, height }}
        >
          <path
            fill="none"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={`${strokeWidth}`}
            d="M31 36L19 24L31 12"
          />
        </svg>
      </button>
      <button
        className={`react-responsive-3d-carousel__arrows right ${
          isShadow ? 'shadow' : ''
        }`}
        onClick={onClickRight}
        ref={rightArrowRef}
        type="button"
        aria-label="next slide"
      >
        {/* right arrow svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          preserveAspectRatio="none"
          style={{ width, height }}
        >
          <path
            fill="none"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={`${strokeWidth}`}
            d="M19 12L31 24L19 36"
          />
        </svg>
      </button>
    </>
  )
}

export default Arrows

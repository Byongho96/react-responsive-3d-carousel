import React from 'react'

import './Indicators.scss'

export interface IndicatorsProps {
  length: number
  index: number
  size?: 'small' | 'medium' | 'large'
  activeColor?: string
  inactiveColor?: string
  isShadow?: boolean
  onClick: (i: number) => void
}

/**
 * Indicators at the bottom of the carousel
 * @param length Total number of indiactors
 * @param index Index of active indicator
 * @param size Size of indicators
 * @param activeColor Color of an active indicator
 * @param inactiveColor Color of inactive indicators
 * @param isShadow Is there shadow in the indicators
 * @param onClick Function to run when each indicator is clicked
 */
const Indicators: React.FC<IndicatorsProps> = ({
  length,
  index,
  size = 'small',
  activeColor = 'rgb(255, 255, 255)',
  inactiveColor = 'rgba(67, 67, 67, 0.4)',
  isShadow = true,
  onClick,
}) => {
  return (
    <ul
      className={`react-responsive-3d-carousel__indicators ${size} ${
        isShadow ? 'shadow' : ''
      }`}
    >
      {Array.from({ length }, (_, i) => (
        <li
          key={i}
          style={{ backgroundColor: i === index ? activeColor : inactiveColor }}
          onClick={() => onClick(i)}
          aria-label={`slide item ${i + 1}`}
        ></li>
      ))}
    </ul>
  )
}

export default Indicators

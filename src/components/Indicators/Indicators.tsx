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
    <ul className={`react-responsive-3d-carousel__indicators ${size}`}>
      {Array.from({ length }, (_, i) => (
        <li
          key={i}
          className={`react-responsive-3d-carousel__indicators__item ${size} ${
            isShadow ? 'shadow' : ''
          }`}
          onClick={() => onClick(i)}
        >
          {/* circle svg */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20Z"
              fill="none"
              style={{ fill: i === index ? activeColor : inactiveColor }}
            />
          </svg>
        </li>
      ))}
    </ul>
  )
}

export default Indicators

import React from 'react'

import './Status.scss'

export interface StatusProps {
  length: number
  index: number
  size?: 'small' | 'medium' | 'large'
  color?: string
  isShadow?: boolean
}

/**
 * Status at the top right of the carousel
 * @param length Value to be displayed on the right of '/'
 * @param index (Value - 1) to be displayed on the left of '/'
 * @param size Size of status
 * @param activeColor Color of status font
 * @param isShadow Is there shadow in the status
 */
const Status: React.FC<StatusProps> = ({
  length,
  index,
  size = 'small',
  color = 'rgb(255, 255, 255)',
  isShadow = true,
}) => {
  return (
    <p
      className={`react-responsive-3d-carousel__status ${size} ${
        isShadow ? 'shadow' : ''
      }`}
      style={{ color: color }}
      aria-label={`${index + 1} of ${length}`}
    >{`${index + 1} / ${length}`}</p>
  )
}

export default Status

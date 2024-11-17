import React from 'react'
import './Indicators.scss'

export interface IndicatorsProps {
  length: number
  curIndex: number
  gap?: string
  color?: string
  width?: string
  height?: string
  activeColor?: string
  shadow?: string
  translate?: [string, string]
  indicatorIcon?: JSX.Element
  onClick?: (e: React.MouseEvent, index: number) => void
}

const Indicators: React.FC<IndicatorsProps> = ({
  length,
  curIndex,
  color = '#ffffff',
  width = '0.7rem',
  height = '0.7rem',
  gap = '1.5rem',
  activeColor = '#888888',
  shadow = '0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)',
  translate = ['0px', '0px'],
  indicatorIcon,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    onClick && onClick(e, index)
  }

  const indicatorsStyle = {
    gap,
    transform: `translate(${translate[0]}, ${translate[1]})`,
    '--indicator-width': width,
    '--indicator-height': height,
    '--indicator-color': color,
    '--indicator-active-color': activeColor,
    '--indicator-shadow': shadow,
  } as React.CSSProperties

  return (
    <ul
      className="react-responsive-3d-carousel__indicators"
      style={indicatorsStyle}
    >
      {Array.from({ length }, (_, i) => (
        <li
          key={i}
          onClick={(e) => handleClick(e, i)}
          aria-label={`slide item ${i + 1}`}
          className={i === curIndex ? 'active' : ''}
        >
          {indicatorIcon ? indicatorIcon : <CircleIcon />}
        </li>
      ))}
    </ul>
  )
}

const CircleIcon = () => {
  return (
    <svg
      preserveAspectRatio="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  )
}

Indicators.displayName = 'Indicators'
export default Indicators

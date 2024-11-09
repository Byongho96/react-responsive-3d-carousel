import React from 'react'
import './Status.scss'

export interface StatusProps {
  length: number
  curIndex: number
  color?: string
  fontSize?: string
  fontWeight?: string
  shadow?: string
  translate?: [string, string]
}

const Status: React.FC<StatusProps> = ({
  length,
  curIndex,
  color = '#ffffff',
  fontSize = '1rem',
  fontWeight = '600',
  shadow = '0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)',
  translate = ['0px', '0px'],
}) => {
  const statusStyle: React.CSSProperties = {
    color,
    fontSize,
    fontWeight,
    textShadow: shadow,
    transform: `translate(${translate[0]}, ${translate[1]})`,
  }

  return (
    <p
      className="react-responsive-3d-carousel__status"
      aria-label={`${curIndex + 1} of ${length}`}
      style={statusStyle}
    >{`${curIndex + 1} / ${length}`}</p>
  )
}

Status.displayName = 'Status'
export default Status

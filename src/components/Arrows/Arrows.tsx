import React from 'react'
import './Arrows.scss'

export interface ArrowsProps {
  width?: string
  height?: string
  color?: string
  hoverColor?: string
  shadow?: string
  prevIcon?: JSX.Element
  nextIcon?: JSX.Element
  nextArrowTranslate?: [string, string]
  prevArrowTranslate?: [string, string]
  onClickNext?: React.MouseEventHandler
  onClickPrev?: React.MouseEventHandler
}

const Arrows: React.FC<ArrowsProps> = ({
  width = '3rem',
  height = '5rem',
  color = '#ffffff',
  hoverColor = '#888888',
  shadow = '0 0.05rem 0.1rem rgba(0, 0, 0, 0.3)',
  nextArrowTranslate = ['0px', '0px'],
  prevArrowTranslate = ['0px', '0px'],
  onClickNext,
  onClickPrev,
  nextIcon,
  prevIcon,
}) => {
  const handleClickPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClickPrev && onClickPrev(e)
  }

  const handleClickNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClickNext && onClickNext(e)
  }

  const arrowsStyle = {
    '--arrow-width': width,
    '--arrow-height': height,
    '--arrow-drop-shadow': shadow,
    '--arrow-color': color,
    '--arrow-hover-color': hoverColor,
  } as React.CSSProperties

  return (
    <div className="react-responsive-3d-carousel__arrows" style={arrowsStyle}>
      <button
        type="button"
        onClick={handleClickPrev}
        aria-label="previous slide"
        style={{
          transform: `translateY(-50%) translate(${prevArrowTranslate[0]}, ${prevArrowTranslate[1]})`,
        }}
      >
        {prevIcon || <LeftCaretIcon />}
      </button>
      <button
        type="button"
        onClick={handleClickNext}
        aria-label="next slide"
        style={{
          transform: `translateY(-50%) translate(${nextArrowTranslate[0]}, ${nextArrowTranslate[1]})`,
        }}
      >
        {nextIcon || <RightCaretIcon />}
      </button>
    </div>
  )
}

const LeftCaretIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  )
}

const RightCaretIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
}

Arrows.displayName = 'Arrows'
export default Arrows

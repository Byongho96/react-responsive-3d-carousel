import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useSwipe from '../../hooks/useSwipe'
import { getNextIndex, getPrevIndex } from '../../utils/getCarouselIndex'
import {
  setFiveCarouselStyle,
  setThreeCarouselStyle,
  setTwoCarouselStyle,
} from '../../utils/setCarouselStyle'
import Arrows from '../Arrows'
import Indicators from '../Indicators'
import Status from '../Status/Status'

import './Carousel.scss'

export interface CarouselProps {
  children: React.ReactNode | React.ReactNode[]
  width?: string
  height?: string
  depth?: number
  autoPlay?: boolean
  interval?: number
  transitionTime?: number
  infiniteLoop?: boolean
  startIndex?: number
  showStatus?: boolean
  statusSize?: 'small' | 'medium' | 'large'
  statusColor?: string
  showArrows?: boolean
  arrowsWidth?: string
  arrowsHeight?: string
  arrowsDefaultColor?: string
  arrowsHoveredColor?: string
  arrowsStrokeWidth?: number
  showIndicators?: boolean
  indicatorsSize?: 'small' | 'medium' | 'large'
  indicatorsActiveColor?: string
  indicatorsInactiveColor?: string
}

/**
 *
 * @param children Carousel items
 * @param width Width of a carousel item
 * @param height Height of a carousel item
 * @param depth 3D depth of carousel
 * @param autoPlay Automatically play the carousel
 * @param interval Time interval before the next carousel item (ms)
 * @param transitionTime Time interval for sliding (ms)
 * @param infiniteLoop Infinite loop for sliding the carousel (ms)
 * @param startIndex Index of carousel items to start the slide
 * @param showStatus Whether to show top right status
 * @param statusSize Size of status
 * @param statusColor Color of status
 * @param showArrows Whether to show arrow buttons on both sides
 * @param arrowsWidth Width of an arrow
 * @param arrowsHeight Height of an arrow
 * @param arrowsDefaultColor Color of arrows not hovered
 * @param arrowsHoveredColor Color of arrows hovereds
 * @param arrowsStrokeWidth Stroke width of arrows svg path
 * @param showIndicators Whether to show the bottom indicators
 * @param indicatorsSize Size of indicators
 * @param indicatorsActiveColor Color of an active indicator
 * @param indicatorsInactiveColor Color of inactive indicators
 * @returns
 */
const Carousel: React.FC<CarouselProps> = ({
  children = [],
  width = '25rem',
  height = '18.75rem',
  depth = 1.2,
  autoPlay = true,
  interval = 3000,
  transitionTime = 300,
  infiniteLoop = true,
  startIndex = 0,
  showStatus = true,
  statusSize,
  statusColor,
  showArrows = true,
  arrowsWidth,
  arrowsHeight,
  arrowsDefaultColor,
  arrowsHoveredColor,
  arrowsStrokeWidth,
  showIndicators = true,
  indicatorsSize,
  indicatorsActiveColor,
  indicatorsInactiveColor,
}) => {
  const containerRef = useRef<HTMLDivElement>(null) // The carousel container element
  const [curIndex, setCurIndex] = useState(startIndex) // Current center carousel's index

  /**
   * Convert children props to array
   */
  const childrenArray = useMemo(() => {
    return React.Children.toArray(children)
  }, [children])

  /**
   * The total length of the carousel items
   */
  const length = useMemo(() => {
    return childrenArray.length
  }, [childrenArray])

  /**
   * Slide to the previous carousel item
   */
  const slidePrev = useCallback(() => {
    setCurIndex((curIndex: number) => getPrevIndex(length, curIndex))
  }, [length])

  /**
   * Slide to the next carousel item
   */
  const slideNext = useCallback(() => {
    setCurIndex((curIndex: number) => getNextIndex(length, curIndex))
  }, [length])

  /**
   * Slide along swipe direction
   */
  useSwipe(containerRef, slideNext, slidePrev)

  /**
   * Auto Play
   */
  const [isFinished, setIsFinished] = useState(false) // End of an loop, when 'infiniteLoop' is false

  useEffect(() => {
    if (infiniteLoop) {
      setIsFinished(false)
    }
  }, [infiniteLoop])

  useEffect(() => {
    // invalid conditions
    if (!autoPlay) return
    if (isFinished) return
    // auto slide interval function
    const intervalFunc = function autoSlide() {
      if (curIndex == length - 1 && !infiniteLoop) {
        intervalId && clearInterval(intervalId)
        setIsFinished(true)
        return
      }
      slideNext()
    }
    // set the auto slide interval fucntion
    const intervalId = setInterval(intervalFunc, interval)
    // clean up
    return () => {
      intervalId && clearInterval(intervalId)
    }
  }, [
    autoPlay,
    interval,
    infiniteLoop,
    length,
    curIndex,
    isFinished,
    slideNext,
  ])

  /**
   * CSS Transition according to the 'curIndex'
   */
  useEffect(() => {
    const containerEle = containerRef.current as HTMLDivElement
    const carouselItems = containerEle.children

    if (length < 2) {
      // pass
    } else if (length < 3) {
      setTwoCarouselStyle(length, curIndex, width, depth, carouselItems)
    } else if (length < 5) {
      setThreeCarouselStyle(length, curIndex, width, depth, carouselItems)
    } else {
      setFiveCarouselStyle(length, curIndex, width, depth, carouselItems)
    }
  }, [length, curIndex, width, depth])

  return (
    <div
      className="react-responsive-3d-carousel__carousel"
      style={{ height: height }}
    >
      <div
        className="react-responsive-3d-carousel__carousel__list"
        ref={containerRef}
      >
        {childrenArray.map((child: React.ReactNode, curIndex: number) => (
          <div
            className={`react-responsive-3d-carousel__carousel__list__item ${
              width > height ? 'landscape' : 'portrait'
            }`}
            key={curIndex}
            style={{
              width: width,
              height: height,
              transition: `all ${transitionTime}ms ease-in-out`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {showStatus && (
        <Status
          length={length}
          index={curIndex}
          size={statusSize}
          color={statusColor}
        />
      )}
      {showArrows && (
        <Arrows
          onClickLeft={slidePrev}
          onClickRight={slideNext}
          width={arrowsWidth}
          height={arrowsHeight}
          defaultColor={arrowsDefaultColor}
          hoveredColor={arrowsHoveredColor}
          strokeWidth={arrowsStrokeWidth}
        />
      )}
      {showIndicators && (
        <Indicators
          length={length}
          index={curIndex}
          onClick={(idx: number) => setCurIndex(idx)}
          size={indicatorsSize}
          activeColor={indicatorsActiveColor}
          inactiveColor={indicatorsInactiveColor}
        />
      )}
    </div>
  )
}

export default Carousel

import React, {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import useSwipe from '../../hooks/useSwipe'
import { getNextIndex, getPrevIndex } from '../../utils/getCarouselIndex'
import {
  setFiveCarouselStyle,
  setOneCarouselStyle,
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
  spread?: 'wide' | 'normal' | 'narrow'
  depth?: number
  autoPlay?: boolean
  interval?: number
  transitionTime?: number
  infiniteLoop?: boolean
  startIndex?: number
  selectable?: boolean
  pauseOnHover?: boolean
  onClickCenteredItem?: (index: number) => void
  isShadow?: boolean
  showStatus?: boolean
  statusSize?: 'small' | 'medium' | 'large'
  statusColor?: string
  isStatusShadow?: boolean
  showArrows?: boolean
  arrowsWidth?: string
  arrowsHeight?: string
  arrowsDefaultColor?: string
  arrowsHoveredColor?: string
  arrowsStrokeWidth?: number
  isArrowsShadow?: boolean
  showIndicators?: boolean
  indicatorsSize?: 'small' | 'medium' | 'large'
  indicatorsActiveColor?: string
  indicatorsInactiveColor?: string
  isIndicatorsShadow?: boolean
}

/**
 *
 * @param children Carousel items
 * @param width Width of a carousel item
 * @param height Height of a carousel item
 * @param spread The extent to carousel items are spread out
 * @param depth 3D depth of carousel
 * @param autoPlay Automatically play the carousel
 * @param interval Time interval before the next carousel item (ms)
 * @param transitionTime Time interval for sliding (ms)
 * @param infiniteLoop Infinite loop for sliding the carousel (ms)
 * @param startIndex Index of carousel items to start the slide
 * @param selectable Is there shadow in the indicators
 * @param pauseOnHover Is there shadow in the indicators
 * @param onClickCenteredItem Is there shadow in the indicators
 * @param isShadow Is there shadow in the carousel items
 * @param showStatus Whether to show top right status
 * @param statusSize Size of status
 * @param statusColor Color of status
 * @param isStatusShadow Is there shadow in the status
 * @param showArrows Whether to show arrow buttons on both sides
 * @param arrowsWidth Width of an arrow
 * @param arrowsHeight Height of an arrow
 * @param arrowsDefaultColor Color of arrows not hovered
 * @param arrowsHoveredColor Color of arrows hovereds
 * @param arrowsStrokeWidth Stroke width of arrows svg path
 * @param isArrowsShadow Is there shadow in the arrows
 * @param showIndicators Whether to show the bottom indicators
 * @param indicatorsSize Size of indicators
 * @param indicatorsActiveColor Color of an active indicator
 * @param indicatorsInactiveColor Color of inactive indicators
 * @param isIndicatorsShadow Is there shadow in the indicators
 * @returns
 */
const Carousel: React.FC<CarouselProps> = ({
  children = [],
  width = '500px',
  height = '300px',
  spread = 'wide',
  depth = 1,
  autoPlay = true,
  interval = 3000,
  transitionTime = 500,
  infiniteLoop = true,
  startIndex = 0,
  selectable = true,
  pauseOnHover = true,
  onClickCenteredItem = (index: number) => console.log(index),
  isShadow = true,
  showStatus = true,
  statusSize,
  statusColor,
  isStatusShadow = true,
  showArrows = true,
  arrowsWidth,
  arrowsHeight,
  arrowsDefaultColor,
  arrowsHoveredColor,
  arrowsStrokeWidth,
  isArrowsShadow = true,
  showIndicators = true,
  indicatorsSize,
  indicatorsActiveColor,
  indicatorsInactiveColor,
  isIndicatorsShadow = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null) // The carousel container element
  const [curIndex, setCurIndex] = useState(startIndex) // Current center carousel's index

  /**
   * Convert children props to array
   */
  const childrenArray = useMemo(() => {
    return Children.toArray(children)
  }, [children])

  /**
   * The total length of the carousel items
   */
  const length = useMemo(() => {
    return childrenArray.length
  }, [childrenArray])

  /**
   * Adjust curIndex if it's greater than length
   */
  useEffect(() => {
    if (curIndex < length) return
    setCurIndex(length - 1)
  }, [length])

  /**
   * Handle pause
   */
  const pause = useRef(false) // Flag to pause carousel loop

  const startPause = useCallback(() => {
    if (pauseOnHover) {
      pause.current = true
    }
  }, [pauseOnHover])

  const releasePause = useCallback(() => {
    if (pauseOnHover) {
      pause.current = false
    }
  }, [pauseOnHover])

  /**
   * Slide to the previous carousel item
   */
  const slidePrev = useCallback(() => {
    if (pause.current) return
    setCurIndex((curIndex: number) => getPrevIndex(length, curIndex))
  }, [length])

  /**
   * Slide to the next carousel item
   */
  const slideNext = useCallback(() => {
    if (pause.current) return
    setCurIndex((curIndex: number) => getNextIndex(length, curIndex))
  }, [length])

  /**
   * Slide along swipe direction
   */
  useSwipe(containerRef, slideNext, slidePrev)

  /**
   * Auto Play (Slide)
   */
  const isFinished = useRef(false) // Flag to stop infinite animation loop

  useEffect(() => {
    if (infiniteLoop) {
      isFinished.current = false
    }
  }, [infiniteLoop])

  useEffect(() => {
    // Invalid conditions
    if (!autoPlay || isFinished.current) return

    // Auto slide
    const autoSlide = () => {
      if (curIndex == length - 1 && !infiniteLoop) {
        intervalId && clearInterval(intervalId)
        isFinished.current = true
        return
      }
      slideNext()
    }

    const intervalId = setInterval(autoSlide, interval)

    return () => {
      intervalId && clearInterval(intervalId)
    }
  }, [autoPlay, interval, infiniteLoop, length, curIndex, slideNext])

  /**
   * CSS Transition according to the 'curIndex'
   */
  useEffect(() => {
    const containerEle = containerRef.current as HTMLDivElement
    const carouselItems = containerEle.children

    if (length < 2) {
      setOneCarouselStyle(curIndex, carouselItems)
    } else if (length < 3) {
      setTwoCarouselStyle(length, curIndex, width, depth, carouselItems)
    } else if (length < 5) {
      setThreeCarouselStyle(length, curIndex, width, depth, carouselItems)
    } else {
      setFiveCarouselStyle(length, curIndex, width, depth, carouselItems)
    }
  }, [length, curIndex, width, depth])

  /**
   * Handle clicking carousel items
   */
  const clickSlide = (index: number) => {
    if (selectable) {
      setCurIndex(index)
    }
    if (curIndex === index && onClickCenteredItem) {
      onClickCenteredItem(index)
    }
  }

  return (
    <div
      className="react-responsive-3d-carousel__carousel"
      style={{ height: height }}
    >
      <div
        className={`react-responsive-3d-carousel__carousel__list ${spread}`}
        ref={containerRef}
        onPointerEnter={startPause}
        onPointerLeave={releasePause}
      >
        {childrenArray.map((child: React.ReactNode, curIndex: number) => (
          <div
            className={`react-responsive-3d-carousel__carousel__item ${
              isShadow ? 'shadow' : ''
            }`}
            key={curIndex}
            style={{
              width: width,
              height: height,
              transition: `all ${transitionTime}ms ease-in-out`,
              cursor: selectable ? 'pointer' : 'initial',
            }}
            onClick={() => clickSlide(curIndex)}
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
          isShadow={isStatusShadow}
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
          isShadow={isArrowsShadow}
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
          isShadow={isIndicatorsShadow}
        />
      )}
    </div>
  )
}

export default Carousel

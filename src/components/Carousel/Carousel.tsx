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
  selectable?: boolean
  pauseOnHover?: boolean
  onClickItem?: (index: number) => void
  onClickSelectedItem?: (index: number) => void
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
  selectable = false,
  pauseOnHover = false,
  onClickItem,
  onClickSelectedItem,
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
   * Pause
   */
  const pause = useRef(false) // Flag to pause carousel loop

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

  const selectSlide = useCallback(
    (index: number) => {
      if (selectable) {
        if (curIndex === index && onClickSelectedItem)
          onClickSelectedItem(index)
        else if (onClickItem) onClickItem(index)
        setCurIndex(index)
      }
    },
    [curIndex, selectable, onClickSelectedItem, onClickItem]
  )

  const startPause = useCallback(
    (index: number) => {
      if (pauseOnHover && curIndex === index) {
        pause.current = true
      }
    },
    [curIndex, pauseOnHover]
  )

  const releasePause = useCallback(
    (index: number) => {
      if (pauseOnHover && curIndex === index) {
        pause.current = false
      }
    },
    [curIndex, pauseOnHover]
  )

  /**
   * Slide along swipe direction
   */
  useSwipe(containerRef, slideNext, slidePrev)

  /**
   * Auto Play
   */
  const [isFinished, setIsFinished] = useState<boolean>(false) // End of an loop, when 'infiniteLoop' is false

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

    if (!pause.current) {
      if (length < 2) {
        setOneCarouselStyle(curIndex, carouselItems)
      } else if (length < 3) {
        setTwoCarouselStyle(length, curIndex, width, depth, carouselItems)
      } else if (length < 5) {
        setThreeCarouselStyle(length, curIndex, width, depth, carouselItems)
      } else {
        setFiveCarouselStyle(length, curIndex, width, depth, carouselItems)
      }
    }
  }, [length, curIndex, width, depth])

  return (
    <div
      className="react-responsive-3d-carousel__carousel"
      style={{ height: height }}
    >
      <div
        className={`react-responsive-3d-carousel__carousel__list ${spread}`}
        ref={containerRef}
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
            onClick={() => selectSlide(curIndex)}
            onPointerEnter={() => startPause(curIndex)}
            onPointerLeave={() => releasePause(curIndex)}
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

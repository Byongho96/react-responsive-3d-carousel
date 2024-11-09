import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import CSS_VARIABLE from '../../constant/css'
import useAutoPlay from '../../hooks/useAutoPlay'
import useFocus from '../../hooks/useFocus'
import useLayout, { LayoutType } from '../../hooks/useLayout'
import useSize from '../../hooks/useSize'
import useSwipe, { SwipeDirection } from '../../hooks/useSwipe'
import { DefaultOption } from '../../utils/defaultLayoutInfo'
import Arrows, { ArrowsProps } from '../Arrows/Arrows'
import Indicators, { IndicatorsProps } from '../Indicators/Indicators'
import Status, { StatusProps } from '../Status/Status'
import './Carousel.scss'

export type AlignType = 'center' | 'top' | 'bottom'

export interface CarouselProps {
  children?: React.ReactNode

  ariaLabel?: string

  items: JSX.Element[]
  startIndex?: number

  /** Container */
  containerWidth?: string
  containerHeight?: string
  containerPadding?: string

  /** Carousel 2D */
  width?: string | number // if it's a number, it's proportional to container width
  height?: string | number // if it's a number, it's proportional to container height
  align?: AlignType
  boxShadow?: string

  /** Carousel 3D */
  perspective?: string
  perspectiveOrigin?: string
  layout?: LayoutType
  defaultOption?: DefaultOption // Default layout option (layout === 'default')

  /** Carousel Transition */
  sizeDuration?: number
  sizeTimingFn?: string
  transformDuration?: number
  transformTimingFn?: string

  /** Carousel Interaction */
  focusOnSelect?: boolean
  pauseOnHover?: boolean

  /** Carousel Callback */
  onChange?: (index: number, item: JSX.Element) => void
  onClickItem?: (
    e: React.MouseEvent,
    index: number,
    item: JSX.Element,
    isCurrentIndex: boolean
  ) => void

  /** Carousel Play */
  autoPlay?: boolean
  interval?: number
  infiniteLoop?: boolean

  /** Carousel Focus */
  autoFocus?: boolean
  slideWithKeyboard?: 'none' | 'vertical' | 'horizontal' | 'both'

  /** Carousel Swipe */
  swipeable?: boolean
  swipeDirection?: SwipeDirection
  onSwipeStart?: (event: TouchEvent) => void
  onSwipeEnd?: (event: TouchEvent) => void
  onSwipeMove?: (event: TouchEvent) => void

  /* Status */
  showStatus?: boolean
  status?: StatusProps

  /* Arrows */
  showArrows?: boolean
  arrows?: ArrowsProps

  /* Indicators */
  showIndicators?: boolean
  indicators?: IndicatorsProps
}

type DefaultContext = {
  curIndex: number,
  setCurIndex: React.Dispatch<React.SetStateAction<number>>,
}

export const CarouselContext = createContext<DefaultContext>({
  curIndex: 0,
  setCurIndex: (_) => {},
})

const Carousel: React.FC<CarouselProps> = ({
  children,

  ariaLabel = '3d carousel',

  items,
  startIndex = 0,

  /** Container */
  containerHeight = 'auto',
  containerWidth = '100%',
  containerPadding = '1rem',

  /** Carousel 2D */
  width: strNumWidth = '400px',
  height: strNumHeight = '300px',
  align = 'center',
  boxShadow = '0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)',

  /** Carousel 3D */
  perspective = 'auto',
  perspectiveOrigin = 'center',
  layout = 'default',
  defaultOption,

  /** Carousel Transition */
  sizeDuration = 1000,
  sizeTimingFn = 'ease-in-out',
  transformDuration = 1000,
  transformTimingFn = 'ease-in-out',

  /** Carousel Interaction */
  focusOnSelect = true,
  pauseOnHover = true,

  /** Carousel Callback */
  onClickItem,
  onChange,

  /** Carousel Play */
  autoPlay = true,
  interval = 3000,
  infiniteLoop = true,

  /** Carousel Focus */
  autoFocus = false,
  slideWithKeyboard = 'both',

  /** Carousel Swipe */
  swipeable = true,
  swipeDirection = 'horizontal',
  onSwipeStart,
  onSwipeEnd,
  onSwipeMove,

  /* Status */
  showStatus = true,
  status,

  /* Arrows */
  showArrows = true,
  arrows,

  /* Indicators */
  showIndicators = true,
  indicators,
}) => {
  const containerRef = useRef<HTMLDivElement>(null) // The carousel container element
  const listRef = useRef<HTMLUListElement>(null) // The carousel list element
  const pauseRef = useRef(false) // Flag to pause carousel auto play

  const [curIndex, setCurIndex] = useState(startIndex) // Current center carousel's index

  // Transform number or string type width and height to string type
  const width = useMemo(
    () =>
      typeof strNumWidth === 'number'
        ? `calc(${strNumWidth} * var(${CSS_VARIABLE.CONTAINER_WIDTH}))`
        : strNumWidth,
    [strNumWidth]
  )
  const height = useMemo(
    () =>
      typeof strNumHeight === 'number'
        ? `calc(${strNumHeight} * var(${CSS_VARIABLE.CONTAINER_HEIGHT}))`
        : strNumHeight,
    [strNumHeight]
  )

  const htmlItemsRef = useRef<HTMLElement[]>([])

  /**
   * Memoize renderedItems
   */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    htmlItemsRef.current = Array.from(
      container.getElementsByClassName('react-responsive-3d-carousel__item')
    ) as HTMLElement[]
  }, [items])

  /**
   * Slide to the previous carousel item
   */
  const slidePrev = useCallback(() => {
    if (pauseRef.current) return
    setCurIndex((curIndex: number) => {
      if (!infiniteLoop && curIndex === 0) return curIndex
      return (curIndex - 1 + items.length) % items.length
    })
  }, [items, infiniteLoop, setCurIndex])

  /**
   * Slide to the next carousel item
   */
  const slideNext = useCallback(() => {
    if (pauseRef.current) return
    setCurIndex((curIndex: number) => {
      if (!infiniteLoop && curIndex === items.length - 1) return curIndex
      return (curIndex + 1) % items.length
    })
  }, [items, infiniteLoop, setCurIndex])

  /**
   * Sync curIndex with startIndex, if startIndex is changed
   */
  useEffect(() => {
    setCurIndex(startIndex)
  }, [startIndex])

  /**
   * Adjust curIndex if it's out of range
   */
  useEffect(() => {
    if (curIndex < 0) setCurIndex(0)
    else if (items.length - 1 < curIndex) setCurIndex(items.length - 1)
  }, [items, curIndex])

  /**
   * Callback function for onChange
   */
  const isFlag = useRef(false) // Flag to prevent calling onChange on the first render

  useEffect(() => {
    if (!isFlag.current) {
      isFlag.current = true
      return
    }

    onChange && onChange(curIndex, items[curIndex])
  }, [curIndex, onChange])

  // Auto play
  useAutoPlay(autoPlay, interval, curIndex, slideNext)

  // Carousel layout style
  useLayout(
    items,
    htmlItemsRef,
    align,
    width,
    height,
    layout,
    curIndex,
    defaultOption
  )

  // Set width of the list and items as CSS variables
  useSize( items, htmlItemsRef,listRef, width, curIndex)

  // Swipe feature
  useSwipe({
    containerRef,
    swipeable,
    swipeDirection,
    slideNext,
    slidePrev,
    onSwipeStart,
    onSwipeEnd,
    onSwipeMove,
  })

  // Focus and keyboard navigation
  useFocus(containerRef, autoFocus, slideWithKeyboard, slideNext, slidePrev)

  /**
   * Handler functions
   */
  const handleClickItem = (e: React.MouseEvent, index: number) => {
    focusOnSelect && setCurIndex(index)
    onClickItem && onClickItem(e, index, items[curIndex], curIndex === index)
  }

  const handleMouseEnterItem = () => {
    pauseOnHover && (pauseRef.current = true)
  }

  const handleMouseLeaveItem = () => {
    pauseOnHover && (pauseRef.current = false)
  }

  const handleClickNextArrow = (e: React.MouseEvent) => {
    slideNext()
    arrows?.onClickNext && arrows.onClickNext(e)
  }

  const handleClickPrevArrow = (e: React.MouseEvent) => {
    slidePrev()
    arrows?.onClickPrev && arrows.onClickPrev(e)
  }

  const handleClickIndicator = (e: React.MouseEvent, index: number) => {
    setCurIndex(index)
    indicators?.onClick && indicators.onClick(e, index)
  }

  /**
   * Styles
   */
  const containerStyle = {
    width: containerWidth,
    height: containerHeight,
    padding: containerPadding,
  }

  const listStyle = {
    perspective:
      perspective === 'auto'
        ? `var(${CSS_VARIABLE.CONTAINER_WIDTH})`
        : perspective,
    perspectiveOrigin,
    height: containerHeight === 'auto' ? height : '100%',
  }

  const itemStyle = {
    width: width,
    height: height,
    transition: `transform ${transformDuration}ms ${transformTimingFn}, width ${sizeDuration}ms ${sizeTimingFn}, height ${sizeDuration}ms ${sizeTimingFn}`,
    cursor: focusOnSelect ? 'pointer' : 'initial',
    top: align === 'top' ? '0%' : align === 'center' ? '50' : '100%',
    boxShadow,
  }

  return (
    <CarouselContext.Provider value={{ curIndex, setCurIndex }}>
      <div
        className="react-responsive-3d-carousel"
        aria-label={ariaLabel}
        tabIndex={slideWithKeyboard !== 'none' ? 0 : undefined}
        style={containerStyle}
        ref={containerRef}
      >
        <ul
          className="react-responsive-3d-carousel__list"
          style={listStyle}
          ref={listRef}
        >
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className={`react-responsive-3d-carousel__item 
                ${width !== 'auto' ? 'fixed-width' : ''} 
                ${height !== 'auto' ? 'fixed-height' : ''}`}
                onClick={(e) => handleClickItem(e, index)}
                style={itemStyle}
                onMouseEnter={handleMouseEnterItem}
                onMouseLeave={handleMouseLeaveItem}
              >
                {item}
              </li>
            )
          })}
          {children}
        </ul>
        {showStatus && (
          <div className="react-responsive-3d-carousel__status-container">
            <Status length={items.length} curIndex={curIndex} {...status} />
          </div>
        )}
        {showArrows && (
          <div className="react-responsive-3d-carousel__arrows-container">
            <Arrows
              onClickNext={handleClickNextArrow}
              onClickPrev={handleClickPrevArrow}
              {...arrows}
            />
          </div>
        )}
        {showIndicators && (
          <div className="react-responsive-3d-carousel__indicators-container">
            <Indicators
              length={items.length}
              curIndex={curIndex}
              onClick={handleClickIndicator}
              {...indicators}
            />
          </div>
        )}
      </div>
    </CarouselContext.Provider>
  )
}

export default Carousel

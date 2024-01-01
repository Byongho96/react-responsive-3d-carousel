import React, { useEffect, useMemo, useState } from 'react'
import Carousel from '../../src/components/Carousel'
import logoSvg from '../public/logo.svg'
import catImg from '../public/media/cat.jpg'
import cloudImg from '../public/media/cloud.jpg'
import forestImg from '../public/media/forest.jpg'
import mountainImg from '../public/media/mountain.jpg'
import puppyImg from '../public/media/puppy.jpg'
import './App.scss'
const oceanVid = './media/ocean.mp4'
const waterVid = './media/water.mp4'

// quries for unsplash api
const MEDIA_ARRAY = [
  <img src={catImg} alt=" cat in the woods" />,
  <video muted loop autoPlay>
    <source src={waterVid} />
    <p>a video of paint spreading into the water</p>
  </video>,
  <img src={puppyImg} alt="Chihuahua on the blanket" />,
  <iframe
    src="https://www.youtube.com/embed/_ITiwPMUzho?si=_ox71JTwQ6Q5pKin"
    title="YouTube video player"
    frameborder="0"
  />,
  <a
    href="https://www.npmjs.com/package/react-responsive-3d-carousel"
    title="npm package"
    aria-label="react responsive 3D carousel npm package"
    target="_blank"
    style={{ textDecoration: 'none' }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        color: '#ffffff',
        fontSize: '2rem',
        fontWeight: '800',
        textAlign: 'center',
        textDecoration: 'none',
        backgroundColor: '#666666',
      }}
    >
      Click Me!
    </div>
  </a>,
  <img
    src={mountainImg}
    alt="a lake among the mountain ranges in sunny weather"
  />,
  <img src={cloudImg} alt="a cloud over the blue sea" />,
  <iframe
    src="https://www.youtube.com/embed/gdZLi9oWNZg?si=UZQJ_TvyHIFx_sFe"
    title="YouTube video player"
    frameborder="0"
  />,
  <img src={forestImg} alt="sunset forest road" />,
  <video muted loop autoPlay>
    <source src={oceanVid} />
    <p>Aerial shot of beach waves with drones</p>
  </video>,
]

function App() {
  const [numberOfSlides, setNumberOfSlides] = useState(5)
  const [width, setWidth] = useState('500px')
  const [height, setHeight] = useState('300px')
  const [spread, setSpread] = useState('wide')
  const [depth, setDepth] = useState(1)
  const [interval, setInterval] = useState(3000)
  const [transitionTime, setTransitionTime] = useState(500)
  const [autoPlay, setAutoPlay] = useState(true)
  const [infiniteLoop, setInfiniteLoop] = useState(true)
  const [isShadow, setIsShadow] = useState(true)

  const [showStatus, setShowStatus] = useState(true)
  const [statusSize, setStatusSize] = useState('small')
  const [statusColor, setStatusColor] = useState('#ffffff')
  const [isStatusShadow, setIsStatusShadow] = useState(true)

  const [showArrows, setShowArrows] = useState(true)
  const [arrowsWidth, setArrowsWidth] = useState('48px')
  const [arrowsHeight, setArrowsHeight] = useState('83px')
  const [arrowsDefaultColor, setArrowsDefaultColor] = useState('#ffffff')
  const [arrowsHoveredColor, setArrowsHoveredColor] = useState('#888888')
  const [arrowsStrokeWidth, setArrowsStrokeWidth] = useState(5)
  const [isArrowsShadow, setIsArrowsShadow] = useState(true)

  const [selectable, setSelectable] = useState(false)
  const [pauseOnHover, setPauseOnHover] = useState(false)
  const [showIndicators, setShowIndicators] = useState(true)
  const [indicatorsSize, setIndicatorsSize] = useState('small')
  const [indicatorsActiveColor, setIndicatorsActiveColor] = useState('#ffffff')
  const [indicatorsInactiveColor, setIndicatorsInactiveColor] =
    useState('#999999')
  const [isIndicatorsShadow, setIsIndicatorsShadow] = useState(true)

  // handle set number of slides
  const handleSetNumberOfSlides = function (num) {
    const number = Number(num)
    if (number > 10) {
      setNumberOfSlides(10)
    } else if (number < 0) {
      setNumberOfSlides(0)
    } else {
      setNumberOfSlides(number)
    }
  }

  // make integer array from the number of carousel slides
  const mediaArray = useMemo(() => {
    return MEDIA_ARRAY.slice(0, numberOfSlides)
  }, [numberOfSlides])

  // set mobile prop value when innerwidth < 720px
  useEffect(() => {
    if (window.innerWidth < 720) {
      setWidth('250px')
      setHeight('180px')
      setShowArrows(false)
    }
  }, [])

  return (
    <div className="carousel-3d-page">
      <div className="carousel-3d-page__header">
        <img
          className="carousel-3d-page__header__logo"
          alt="react responsive 3D carousel logo"
          src={logoSvg}
        />
        <h1 className="carousel-3d-page__header__title">
          React Responsive 3D Carousel
        </h1>
        <div className="carousel-3d-page__links">
          <div>
            <a
              href="https://github.com/Byongho96/react-responsive-3d-carousel"
              title="github"
              aria-label="react responsive 3D carousel github source code"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                />
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.npmjs.com/package/react-responsive-3d-carousel"
              title="npm package"
              aria-label="react responsive 3D carousel npm package"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="black"
                  d="M4.5 10.5v2h2v-2h8v-6H.5v6h4Zm0 0v-6m4 0v6M6.5 6v3m-4-3v4.5m8-4.5v4.5m2-4.5v4.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Carousel
        width={width}
        height={height}
        spread={spread}
        depth={depth}
        interval={interval}
        transitionTime={transitionTime}
        autoPlay={autoPlay}
        infiniteLoop={infiniteLoop}
        isShadow={isShadow}
        showStatus={showStatus}
        statusSize={statusSize}
        statusColor={statusColor}
        isStatusShadow={isStatusShadow}
        showArrows={showArrows}
        arrowsWidth={arrowsWidth}
        arrowsHeight={arrowsHeight}
        arrowsDefaultColor={arrowsDefaultColor}
        arrowsHoveredColor={arrowsHoveredColor}
        arrowsStrokeWidth={arrowsStrokeWidth}
        isArrowsShadow={isArrowsShadow}
        showIndicators={showIndicators}
        selectable={selectable}
        pauseOnHover={pauseOnHover}
        indicatorsSize={indicatorsSize}
        indicatorsActiveColor={indicatorsActiveColor}
        indicatorsInactiveColor={indicatorsInactiveColor}
        isIndicatorsShadow={isIndicatorsShadow}
      >
        {mediaArray}
      </Carousel>
      <section className="carousel-3d-page__form-section">
        <form className="carousel-3d-page__form">
          <h2 className="carousel-3d-page__form__title">Slide</h2>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="number-of-slides-input">number of slides</label>
            <input
              type="number"
              min="0"
              max="10"
              id="number-of-slides-input"
              name="number-of-slides"
              value={numberOfSlides}
              onChange={(e) => handleSetNumberOfSlides(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="width-input">width</label>
            <input
              type="text"
              id="width-input"
              name="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="height-input">height</label>
            <input
              type="text"
              id="height-input"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="spread-select">spread</label>
            <select
              name="spread"
              id="spread-select"
              onChange={(e) => setSpread(e.target.value)}
            >
              <option value="wide">wide</option>
              <option value="normal">normal</option>
              <option value="narrow">narrow</option>
            </select>
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="depth-input">depth</label>
            <input
              type="number"
              min="0.5"
              max="10"
              step="0.5"
              id="depth-input"
              name="depth"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="interval-input">interval {interval}(ms)</label>
            <input
              type="range"
              id="interval-input"
              name="interval"
              min="1000"
              max="10000"
              step="1000"
              value={interval}
              onChange={(e) => setInterval(Number(e.target.value))}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="transition-time-input">
              transitionTime {transitionTime}(ms)
            </label>
            <input
              type="range"
              id="transition-time-input"
              name="interval"
              min="100"
              max="1000"
              step="100"
              value={transitionTime}
              onChange={(e) => setTransitionTime(Number(e.target.value))}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="auto-play-input">autoPlay</label>
            <input
              type="checkbox"
              id="auto-play-input"
              name="auto-play"
              checked={autoPlay}
              onChange={(e) => setAutoPlay(e.target.checked)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="infinite-loop-input">infiniteLoop</label>
            <input
              type="checkbox"
              id="infinite-loop-input"
              name="infinite-loop"
              checked={infiniteLoop}
              onChange={(e) => setInfiniteLoop(e.target.checked)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="is-shadow-input">isShadow</label>
            <input
              type="checkbox"
              id="is-shadow-input"
              name="is-shadow"
              checked={isShadow}
              onChange={(e) => setIsShadow(e.target.checked)}
            />
          </div>
        </form>
        <form className="carousel-3d-page__form">
          <h2 className="carousel-3d-page__form__title">Status</h2>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="show-status-input">showStatus</label>
            <input
              type="checkbox"
              id="show-status-input"
              name="show-status"
              checked={showStatus}
              onChange={(e) => setShowStatus(e.target.checked)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="status-size-select">statusSize</label>
            <select
              name="status-size"
              id="status-size-select"
              onChange={(e) => setStatusSize(e.target.value)}
            >
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="status-color-input">statusColor</label>
            <input
              type="color"
              id="status-color-input"
              name="status-color"
              value={statusColor}
              onChange={(e) => setStatusColor(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="is-status-shadow-input">isStatusShadow</label>
            <input
              type="checkbox"
              id="is-status-shadow-input"
              name="is-status-shadow"
              checked={isStatusShadow}
              onChange={(e) => setIsStatusShadow(e.target.checked)}
            />
          </div>
        </form>
        <form className="carousel-3d-page__form">
          <h2 className="carousel-3d-page__form__title">Arrows</h2>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="show-arrows-input">Show Arrows</label>
            <input
              type="checkbox"
              id="show-arrows-input"
              name="show-arrows"
              checked={showArrows}
              onChange={(e) => setShowArrows(e.target.checked)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="arrows-width-input">arrowsWidth</label>
            <input
              type="text"
              id="arrows-width-input"
              name="arrows-width"
              value={arrowsWidth}
              onChange={(e) => setArrowsWidth(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="arrows-height-input">arrowsHeight</label>
            <input
              type="text"
              id="arrows-height-input"
              name="arrows-height"
              value={arrowsHeight}
              onChange={(e) => setArrowsHeight(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="arrows-default-color-input">
              arrowsDefaultColor
            </label>
            <input
              type="color"
              id="arrows-default-color-input"
              name="arrows-default-color"
              value={arrowsDefaultColor}
              onChange={(e) => setArrowsDefaultColor(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="arrows-hovered-color-input">
              arrowsHoveredColor
            </label>
            <input
              type="color"
              id="arrows-hovered-color-input"
              name="arrows-hovered-color"
              value={arrowsHoveredColor}
              onChange={(e) => setArrowsHoveredColor(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="arrows-stroke-width-input">arrowsStrokeWidth</label>
            <input
              type="number"
              min="1"
              max="20"
              step="0.5"
              id="arrows-stroke-width-input"
              name="arrows-stroke-width"
              value={arrowsStrokeWidth}
              onChange={(e) => setArrowsStrokeWidth(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="is-arrows-shadow-input">isArrowsShadow</label>
            <input
              type="checkbox"
              id="is-arrows-shadow-input"
              name="is-arrows-shadow"
              checked={isArrowsShadow}
              onChange={(e) => setIsArrowsShadow(e.target.checked)}
            />
          </div>
        </form>
        <form className="carousel-3d-page__form">
          <h2 className="carousel-3d-page__form__title">Indicators</h2>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="show-indicators-input">Show Indicators</label>
            <input
              type="checkbox"
              id="show-indicators-input"
              name="show-indicators"
              checked={showIndicators}
              onChange={(e) => setShowIndicators(e.target.checked)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="indicators-size-select">indicatorsSize</label>
            <select
              name="indicators-size"
              id="indicators-size-select"
              onChange={(e) => setIndicatorsSize(e.target.value)}
            >
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="indicators-active-color-input">
              indicatorsActiveColor
            </label>
            <input
              type="color"
              id="indicators-active-color-input"
              name="indicators-active-color"
              value={indicatorsActiveColor}
              onChange={(e) => setIndicatorsActiveColor(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="indicators-inactive-color-input">
              indicatorsInactiveColor
            </label>
            <input
              type="color"
              id="indicators-inactive-color-input"
              name="indicators-inactive-color"
              value={indicatorsInactiveColor}
              onChange={(e) => setIndicatorsInactiveColor(e.target.value)}
            />
          </div>
          <div className="carousel-3d-page__form__input">
            <label htmlFor="is-indicators-shadow-input">
              isIndicatorShadow
            </label>
            <input
              type="checkbox"
              id="is-indicators-shadow-input"
              name="is-indicators-shadow"
              checked={isIndicatorsShadow}
              onChange={(e) => setIsIndicatorsShadow(e.target.checked)}
            />
            <label htmlFor="selectable-input">
              selectable
            </label>
            <input
              type="checkbox"
              id="selectable-input"
              name="selectable"
              checked={selectable}
              onChange={(e) => setSelectable(e.target.checked)}
            />
            <label htmlFor="pauseOnHover-input">
              pauseOnHover
            </label>
            <input
              type="checkbox"
              id="pauseOnHover-input"
              name="pauseOnHover"
              checked={pauseOnHover}
              onChange={(e) => setPauseOnHover(e.target.checked)}
            />
          </div>
        </form>
      </section>
    </div>
  )
}

export default App

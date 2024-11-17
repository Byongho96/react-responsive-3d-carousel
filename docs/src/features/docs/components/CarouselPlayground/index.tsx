import { useState } from 'react';
import Carousel from '../Carousel';
import sampleImageSrc from '@site/static/img/sample-image.jpg';
import sampleVideoSrc from '@site/static/video/sample-video.mp4';
import styles from './styles.module.scss';

const items = [
  <img src={sampleImageSrc} alt="Sample Image" />,
  <video src={sampleVideoSrc} autoPlay loop playsInline />,
  <div className={styles['div-item']}><p>Hello Dev</p></div>,
];

export default function CarouselPlayground(): JSX.Element {
  const [width, setWidth] = useState('40%');
  const [height, setHeight] = useState('auto');
  const [aspectRatio, setAspectRatio] = useState(1.33);
  const [containerWidth, setContainerWidth] = useState('100%');
  const [containerHeight, setContainerHeight] = useState('auto');

  const [perspective, setPerspective] = useState('auto');
  const [perspectiveOrigin, setPerspectiveOrigin] = useState('center');
  const [defaultOption, setDefaultOption] = useState({
    widthFactor: 1,
    depthFactor: 1,
    angleFactor: 1,
  });

  const [autoPlay, setAutoPlay] = useState(true);
  const [infiniteLoop, setInfiniteLoop] = useState(true);
  const [interval, setInterval] = useState(3000);
  const [duration, setDuration] = useState(1000);
  const [timingFunction, setTimingFunction] = useState('ease-in-out');
  
  const [focusOnSelect, setFocusOnSelect] = useState(true);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [swipeDirection, setSwipeDirection] = useState('horizontal');
  const [slideWithKeyboard, setSlideWithKeyboard] = useState('horizontal');

  return (
    <div>
      <Carousel items={items} 
        width={width} 
        height={height} 
        aspectRatio={aspectRatio}
        containerWidth={containerWidth}
        containerHeight={containerHeight}

        perspective={perspective}
        perspectiveOrigin={perspectiveOrigin}
        defaultOption={defaultOption}

        autoPlay={autoPlay}
        infiniteLoop={infiniteLoop}
        interval={interval}
        duration={duration}
        transformTimingFn={timingFunction}

        focusOnSelect={focusOnSelect}
        pauseOnHover={pauseOnHover}
        swipeDirection={swipeDirection}
        slideWithKeyboard={slideWithKeyboard}
      />
      <div className={`pico ${styles['form-container']}`}>
        <details open>
          <summary>2D features</summary>
          <InputItem name='width' label="Width" value={width} setValue={setWidth} />
          <InputItem name="height" label="Height" value={height} setValue={setHeight} />
          <InputItem name="aspect-ratio" label="aspectRatio" value={aspectRatio} setValue={setAspectRatio} />
          <InputItem name="container-width" label="Container Width" value={containerWidth} setValue={setContainerWidth} />
          <InputItem name="container-height" label="Container Height" value={containerHeight} setValue={setContainerHeight} />
        </details>
        <details open>
          <summary>3D features</summary>
          <SelectItem name='perspective' label="Perspective" value={perspective} setValue={setPerspective}>
            <option value="auto">auto</option>
            <option value="100px">500px</option>
            <option value="10000px">10000px</option>
          </SelectItem>
          <SelectItem name="perspective-origin" label="Height" value={perspectiveOrigin} setValue={setPerspectiveOrigin} >
            <option value="center">center</option>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
          </SelectItem>
          <InputItem type="number" min={0} step={0.1} name="width-factor" label="Width Factor" value={defaultOption.widthFactor} setValue={(value) => setDefaultOption({...defaultOption, widthFactor: value})} />
          <InputItem type="number" min={0} step={0.1} name="depth-factor" label="Depth Factor" value={defaultOption.depthFactor} setValue={(value) => setDefaultOption({...defaultOption, depthFactor: value})} />
          <InputItem type="number" min={0} step={0.1} name="angle-factor" label="Angle Factor" value={defaultOption.angleFactor} setValue={(value) => setDefaultOption({...defaultOption, angleFactor: value})} />
        </details>
        <details open>
          <summary>Transition</summary>
          <InputItem type="checkbox" name="auto-play" label="Auto Play" value={autoPlay} defaultChecked={autoPlay} setValue={setAutoPlay} />
          <InputItem type="checkbox" name="infinite-loop" label="Infinite Loop" value={autoPlay} defaultChecked={autoPlay} setValue={setInfiniteLoop} />
          <InputItem type="number" min={500} step={500} name="interval" label="Interval" value={interval} setValue={setInterval} />
          <InputItem type="number" min={0} step={500} name="duration" label="Duration" value={duration} setValue={setDuration} />
          <SelectItem name="timing-function" label="Timing Function" value={timingFunction} setValue={setTimingFunction} >
            <option value="ease-in-out">ease-in-out</option>
            <option value="linear">linear</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
          </SelectItem>
        </details>
        <details open>
          <summary>Interaction</summary>
          <InputItem type="checkbox" name="focus-on-select" label="Focus on Select" value={focusOnSelect} defaultChecked={focusOnSelect} setValue={setFocusOnSelect} />
          <InputItem type="checkbox" name="pause-on-hover" label="Pause on Hover" value={pauseOnHover} defaultChecked={pauseOnHover} setValue={setPauseOnHover} />
          <SelectItem name="slide-with-keyboard" label="Slide with Keyboard" value={slideWithKeyboard} setValue={setSlideWithKeyboard} >
            <option value="horizontal">horizontal</option>
            <option value="vertical">vertical</option>
            <option value="both">both</option>
            <option value="none">none</option>
          </SelectItem>
          <SelectItem name="swipe-direction" label="Swipe Direction" value={swipeDirection} setValue={setSwipeDirection} >
            <option value="horizontal">horizontal</option>
            <option value="vertical">vertical</option>
          </SelectItem>
        </details>
      </div>
    </div>
  )
}

const InputItem = ({ type="string", label, name, setValue, ...props }) => (
  <div className={styles['form-item']}>
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} onChange={e => setValue(e.target.value)} {...props}/>
  </div>
);

const SelectItem = ({ children, label, name, value, setValue }) => (
  <div className={styles['form-item']}>
    <label htmlFor={label}>{label}</label>
    <select id={name} name={name} value={value} onChange={e => setValue(e.target.value)}>
      {children}
    </select>
  </div>
)

import { MouseEvent, useContext } from "react";
import { CarouselContext } from "react-responsive-3d-carousel";
import styles from './styles.module.scss';

export default function CarouselItemWithContext(): JSX.Element {
  const { curIndex, slidePrev, slideNext } = useContext(CarouselContext);

  const handleClickPrev = (e: MouseEvent) => {
    e.stopPropagation();
    slidePrev();
  }

  const handleClickNext = (e: MouseEvent) => {
    e.stopPropagation();
    slideNext();
  }

  return (
    <div className={`pico ${styles['carousel-item']}`}>
      <p>
        Current Index : {curIndex}
      </p>
      <div>
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  )
}

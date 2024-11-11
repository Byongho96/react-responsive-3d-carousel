import { MouseEvent, useState } from 'react';
import styles from './styles.module.scss';
import { Indicators as CarouselIndicators } from "react-responsive-3d-carousel";
import 'react-responsive-3d-carousel/dist/styles.css';

export default function Indicators(props): JSX.Element {
  const length = 5;
  const [curIndex, setCurIndex] = useState(0);

  const onClick = (_e: MouseEvent, index: number) => {
    setCurIndex(index);
  }

  return (
    <div className={styles['indicators-container']}>
      <CarouselIndicators length={length} curIndex={curIndex} onClick={onClick} {...props}/>
    </div>
  )
}

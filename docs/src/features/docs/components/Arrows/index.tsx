import styles from './styles.module.scss';
import { Arrows as CarouselArrows } from "react-responsive-3d-carousel";
import 'react-responsive-3d-carousel/dist/styles.css';

export default function Arrows(props): JSX.Element {
  return (
    <div className={styles['container']} style={{height: props.height ?? '5rem'}}>
      <CarouselArrows {...props}/>
    </div>
  )
}

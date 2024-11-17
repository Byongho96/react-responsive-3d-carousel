import styles from './styles.module.scss';
import { Status as CarouselStatus } from "react-responsive-3d-carousel";
import 'react-responsive-3d-carousel/dist/styles.css';

export default function Status(props): JSX.Element {
  return (
    <div className={styles['container']}>
      <CarouselStatus curIndex={0} length={5} {...props}/>
    </div>
  )
}

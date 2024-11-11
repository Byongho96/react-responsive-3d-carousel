import sampleImageSrc from '@site/static/img/sample-image.jpg';
import squareImageSrc from '@site/static/img/square-image.jpg';
import narrowImageSrc from '@site/static/img/narrow-image.jpg';
import wideImageSrc from '@site/static/img/wide-image.jpg';
import styles from './styles.module.scss';
import { Carousel as Carousel3D } from "react-responsive-3d-carousel";
import 'react-responsive-3d-carousel/dist/styles.css';


const sameItems = [
  <img src={sampleImageSrc} alt="Sample Image" />,
  <img src={sampleImageSrc} alt="Sample Image" />,
  <img src={sampleImageSrc} alt="Sample Image" />
];

const differentItems = [
  <img src={squareImageSrc} alt="Sample Image" />,
  <img src={narrowImageSrc} alt="Sample Image" />,
  <img src={wideImageSrc} alt="Sample Image" />
]

export default function Carousel(props): JSX.Element {

  const items = (props.width === 'auto' || props.height === 'auto') ? differentItems : sameItems;

  return (
    <div className={styles['carousel-container']}>
      <Carousel3D items={items} {...props} />
    </div>
  )
}


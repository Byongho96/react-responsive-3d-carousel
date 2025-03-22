import { MouseEventHandler, useContext, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import LightweightImageUrl from '@site/static/img/lightweight.png';
import ResponsiveImageUrl from '@site/static/img/responsive.png';
import CustomizableImageUrl from '@site/static/img/customizable.png';
import CodeLink from '../atoms/CodeLink';
import { Carousel, CarouselContext } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import styles from './styles.module.scss'
import './styles.scss'

const phrases = ['Awesome', 'Beautiful', 'Thrilling', 'Refreshing', 'The best', ' What again? ']

const layout = {
  "default": {
    "translate": {
      "x": 0,
      "y": 0,
      "z": 0,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "offset": {
      "x": 0,
      "y": 0,
      "z": 0
    }
  },
}

const mobileLayout = {...layout}

for (let i = -phrases.length; i <= phrases.length; i++) {
  layout[i] = {
    "translate": {
      "x": Math.sin(-Math.PI * i / 8) * 0.1 * i,
      "y": Math.sin(-Math.PI * i / 8) * 0.5,
      "z": i > -1 ? -i * 0.2 : 1.5,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 360 * ( -i / 8 )
    },
    "offset": {
      "x": 0,
      "y": -0.2,
      "z": 0
    }
  }
  mobileLayout[i] = {
    "translate": {
      "x": 0,
      "y": Math.sin(-Math.PI * i / 8) * 0.5,
      "z": i > -1 ? -i * 0.2 : 1.5,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 360 * ( -i / 8 )
    },
    "offset": {
      "x": 0,
      "y": -0.2,
      "z": 0
    }
  }
}

function Item({index, phrase, isLast}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const { curIndex, slideNext, setCurIndex } = useContext(CarouselContext)

  const handleClickNext: MouseEventHandler = (event) => {
    if (curIndex !== index) return  // Enable focusOnSelect

    event.stopPropagation();
    isLast ? setCurIndex(0) : slideNext();
  }
  
  useEffect(() => {
    const item = itemRef.current
    if (!item) return

    const distance = index - curIndex > 0 ? index - curIndex : 0 
    item.style.filter = `blur(${distance * 3}px)`

  }, [curIndex, index])

  return (
    <div ref={itemRef} className={styles['item']} onClick={handleClickNext}>{phrase}</div>
  )
}

function Card({imgUrl, title, description}) {
  return (
    <div className={styles['card']}>
      <img src={imgUrl} alt={title}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default function Home() {

  const items = phrases.map((phrase, index) => {
    return <Item key={phrase} index={index} phrase={phrase} isLast={index === phrases.length - 1}/>
  })

  return (
    <Layout
      title="Home"
      description="Full-featured 3D carousel component for React.">
      <main className={styles['wrapper']}>
        <div className={styles['carousel-wrapper']}>
          <Carousel
            items={items}
            layout={layout}
            startIndex={0}
            infiniteLoop={false}
            autoPlay={false}
            onChange={(currentIndex) => console.log(currentIndex)}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            containerHeight='100%'
            width="auto"
            height="auto"
            boxShadow='none'
          >
            <p className={styles['title-text']}>
              <span>
                3D Carousel is<br/>
              </span>
              <span>
                Interactive and flexible 3D Carousel component<br/>
                that enables smooth transitions<br/>
                <Link to="/docs/getting-started/installation">Get Started</Link>
              </span>
            </p>
          </Carousel>
          <CodeLink href="https://github.com/Byongho96/react-responsive-3d-carousel/blob/main/docs/src/pages/index.tsx"/>
        </div>
        <div className={styles['card-container']}>
          <Card imgUrl={LightweightImageUrl} title="LightWeight" description="By utilizing only the CSS transform property, the rendering process is optimized for better performance. This enables the delivery of stunning 3D carousel effects on the web with improved efficiency"/>
          <Card imgUrl={ResponsiveImageUrl} title="Responsive" description="Responsive design is essential for providing an optimized user experience. Not only the size of the carousel items but also their layout can be made responsive. Achieve an optimized display for all devices with responsive design."/>
          <Card imgUrl={CustomizableImageUrl} title="Customizable" description="With customization, you can freely arrange the carousel almost entirely to your preference. Use the Layout Editor to easily position items through a user-friendly 3D UI."/>
        </div>
      </main>
    </Layout>
  );
}

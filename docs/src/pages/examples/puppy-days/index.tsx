import Layout from "@theme/Layout";
import { useContext, useEffect, useRef } from "react";
import { Carousel, CarouselContext } from 'react-responsive-3d-carousel';
import useIsMobile from "@site/src/hooks/useIsMobile";
import puppy1ImageUrl from './images/puppy-1.jpg'
import puppy2ImageUrl from './images/puppy-2.jpg'
import puppy3ImageUrl from './images/puppy-3.jpg'
import puppy4ImageUrl from './images/puppy-4.jpg'
import puppy5ImageUrl from './images/puppy-5.jpg'
import puppy6ImageUrl from './images/puppy-6.jpg'
import puppy7ImageUrl from './images/puppy-7.jpg'
import puppy8ImageUrl from './images/puppy-8.jpg'
import puppy9ImageUrl from './images/puppy-9.jpg'
import puppy10ImageUrl from './images/puppy-10.jpg'
import puppy11ImageUrl from './images/puppy-11.jpg'
import puppy12ImageUrl from './images/puppy-12.jpg'
import puppy13ImageUrl from './images/puppy-13.jpg'
import puppy14ImageUrl from './images/puppy-14.jpg'
import backgroundImageUrl from './images/background.jpg'
import 'react-responsive-3d-carousel/dist/styles.css';
import styles from './styles.module.scss'
import './styles.scss'
import CodeLink from "@site/src/atoms/CodeLink";

const numCol = 3
const numRow = 4

const images = [
  puppy1ImageUrl,
  puppy2ImageUrl,
  puppy3ImageUrl,
  puppy4ImageUrl,
  puppy5ImageUrl,
  puppy6ImageUrl,
  puppy7ImageUrl,
  puppy8ImageUrl,
  puppy9ImageUrl,
  puppy10ImageUrl,
  puppy11ImageUrl,
  puppy12ImageUrl,
  puppy13ImageUrl,
  puppy14ImageUrl,
]

const layout = {
  "default": {
    "translate": {
      "x": 0,
      "y": 0,
      "z": -1,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "offset": {
      "x": 0,
      "y": 0,
      "z": -1
    }
  },
  "0": {
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
      "z": 0,
    }
  }
}


for (let i = -6; i <= 6; i++) {
  if (i === 0) continue

  const col = i < 0 ? Math.floor((i + 2) / numRow) : Math.floor((i + 1) / numRow)
  let row = i < 0 ? -Math.floor((i - 1) % numRow) : (numRow - 1) - Math.floor((i + 1) % numRow)
  
  if (col % 2) {
    row = (numRow - 1) - row
  }

  layout[i] = {
    "translate": {
      "x": col * 0.4,
      "y": (row - (numRow - 1) / 2) * 0.4,
      "z": -0.4,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 0,
    },
    "offset": {
      "x": col * 0.8,
      "y": (row - (numRow - 1) / 2) * 0.8,
      "z": -0.8 - Math.abs(i) * 0.1,
    }
  }
}


function Item({index, src}) {
  const itemRef = useRef<HTMLImageElement>(null)
  const {curIndex} = useContext(CarouselContext)  

  useEffect(() => {
    const item = itemRef.current
    if (!item) return

    const distance = Math.abs(curIndex - index)
    item.style.filter = `blur(${Math.min(distance * 5, 20)}px)`

  }, [curIndex, index])

  return (
    <img 
      ref={itemRef}
      className={`${styles['item']} ${curIndex === index ? styles['active'] : ''}`} 
      src={src}
      alt={`puppy ${index + 1}`}
    />
  
  )
}

export default function RotatingAlbumsPage(): JSX.Element {
  const isMobile = useIsMobile()

  const items = images.map((src, index) => (
    <Item index={index} src={src} />
  ))

  return (
    <Layout
      title="Layout Editor"
      description="Effortlessly arrange your carousel using a 3D editor tool.">
      <main className={styles['wrapper']}>
        <Carousel
          items={items}
          layout={layout}
          startIndex={0}
          autoPlay={false}
          transformTimingFn="linear"
          showStatus={false}
          showIndicators={!isMobile}
          containerHeight='100%'
          width="min(70%, 500px)"
          height="auto"
          aspectRatio={4 / 3}
          boxShadow='none'
          arrows={
            {
              width: isMobile ? '50px' : '80px',
              height: isMobile ? '100px' : '150px',
              nextArrowTranslate: isMobile ? ['0', '0'] : ['calc(-50vw + 400px)', '0'],
              prevArrowTranslate: isMobile ? ['0', '0'] : ['calc(50vw - 400px)', '0'],
            }    
          }
        />
        <div className={styles['background']} >
          <img src={backgroundImageUrl} />
        </div>
        <CodeLink href="https://github.com/Byongho96/react-responsive-3d-carousel/blob/main/docs/src/pages/examples/puppy-days/index.tsx" />
      </main>
    </Layout>
  )
}


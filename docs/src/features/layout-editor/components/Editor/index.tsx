import { useEffect, useMemo, useState } from "react";
import Canvas from "./Canvas";
import Panel from "./Panel";
import sampleImageSrc from '@site/static/img/sample-image.jpg';
import SceneStore from "../../stores/SceneStore";
import CarouselContainer from "../../models/CarouselContainer";
import CarouselItem from "../../models/CarouselItem";
import Perspective from "../../models/Perspective";
import { Carousel } from 'react-responsive-3d-carousel'
import 'react-responsive-3d-carousel/dist/styles.css';
import styles from './styles.module.scss'
import { useLayoutContext } from "../../context/LayoutContext";


export default function Editor(): JSX.Element {
  const { state } = useLayoutContext()
  const [selectedObject, setSelectedObject] = useState<CarouselContainer | CarouselItem | Perspective>(SceneStore.carouselContainer)
  const [isPreview, setIsPreview] = useState(false)

  const items = useMemo(() => {
    if (!state.currentLayout.layout) return []
    return Object.keys(state.currentLayout.layout).map((_) => (
      <img src={sampleImageSrc} alt="Sample Image" />
    ))
  }, [isPreview])

  useEffect(() => {
    const handleSceneReset = () => {
      setSelectedObject(SceneStore.carouselContainer)
    }

    SceneStore.addEventListener('reset', handleSceneReset)
    return () => {
      SceneStore.removeEventListener('reset', handleSceneReset)
    }
  }, [])

  return (
    <div className={styles['container']}>
      <div className={styles['canvas-panel-container']}>
        <Canvas selectedObject={selectedObject} setSelectedObject={setSelectedObject} pauseRender={isPreview}/>
        <Panel selectedObject={selectedObject} setSelectedObject={setSelectedObject} />
      </div>
      {isPreview &&
        <div className={`${styles['preview-container']} secondary`}>
          <Carousel items={items} {...state.currentLayout} />
        </div>
      }
      <p className={`pico ${styles['preview-button-container']}`}>
        <button onClick={() => setIsPreview(!isPreview)}>{isPreview ? 'Edit' : 'Preview'}</button>
      </p>
    </div>
  )
}


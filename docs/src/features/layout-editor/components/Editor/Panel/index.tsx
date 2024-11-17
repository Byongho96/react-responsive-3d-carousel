import CarouselContainer from "@site/src/features/layout-editor/models/CarouselContainer";
import CarouselItem from "@site/src/features/layout-editor/models/CarouselItem";
import Perspective from "@site/src/features/layout-editor/models/Perspective";
import CarouselContainerManager from "@site/src/features/layout-editor/managers/CarouselContainerManager";
import CarouselItemManager from "@site/src/features/layout-editor/managers/CarouselItemManager";
import PerspectiveManager from "@site/src/features/layout-editor/managers/PerspectiveManager";
import styles from './styles.module.scss'
import { useLayoutContext } from "../../../context/LayoutContext";
import SceneStore from "../../../stores/SceneStore";

type PanelProps = {
  selectedObject: CarouselContainer | CarouselItem | Perspective
  setSelectedObject?: (object: CarouselContainer | CarouselItem | Perspective) => void
}

const PerspectivePanel = () => {
  const { state } = useLayoutContext()
  const currentLayout = state.currentLayout

  return (
    <label data-tooltip="Scales with container width if a number">
      Perspective
      <input value={currentLayout.perspective} 
        pattern="^(-?\d+(\.\d+)?(px|pt|rem|em|%)?$"
        onChange={(e) => PerspectiveManager.updatePerspective(e.currentTarget.value)}/>
    </label>
  )
}

const CarouselContainerPanel = () => {
  const { state } = useLayoutContext()
  const currentLayout = state.currentLayout

  return (
    <>
      <label>Container Width
        <input value={currentLayout.containerWidth} 
        pattern="^(-?\d+(\.\d+)?(px|pt|rem|em|%)|auto)$"
        onChange={(e) => CarouselContainerManager.updateContainerWidth(e.currentTarget.value)}/>
      </label>
      <label>Container Height
        <input value={currentLayout.containerHeight} 
        pattern="^(-?\d+(\.\d+)?(px|pt|rem|em|%)|auto)$"
        onChange={(e) => CarouselContainerManager.updateContainerHeight(e.currentTarget.value)}/>
      </label>
      <label>Container Padding
        <input value={currentLayout.containerPadding} 
        pattern="^-?\d+(\.\d+)?(px|pt|rem|em|%)?( +(-?\d+(\.\d+)?(px|pt|rem|em|%)?)){0,3}$"
        onChange={(e) => CarouselContainerManager.updateContainerPadding(e.currentTarget.value)}/>
      </label>
      <label data-tooltip="Scales with container width if a number">
        Width
        <input value={currentLayout.width} 
        pattern="^(-?\d+(\.\d+)?(px|pt|rem|em|%)?|auto)$"
        onChange={(e) => CarouselContainerManager.updateWidth(e.currentTarget.value)}/>
      </label>
      <label data-tooltip="Scales with container height if a number">
        Height
        <input value={currentLayout.height} 
        pattern="^(-?\d+(\.\d+)?(px|pt|rem|em|%)?|auto)$"
        onChange={(e) => CarouselContainerManager.updateHeight(e.currentTarget.value)}/>
      </label>
    </>
  )
}

const CarouselItemPanel = ({selectedObject, setSelectedObject}) => { 
  const { state } = useLayoutContext()
  const currentLayout = state.currentLayout

  const currentCarouselItem = currentLayout.layout[selectedObject.index]
  if (!currentCarouselItem) {
    setSelectedObject(SceneStore.carouselContainer)
    return null
  }

  const handleDelete = () => {
    setSelectedObject(SceneStore.carouselContainer)
    CarouselItemManager.delete(selectedObject.uuid)
  }

  return (
    <>
      {selectedObject.index !== 'default' && <button onClick={handleDelete}>Delete Carousel</button>}
      <label data-tooltip="Scales with container width if a number">
        Width
        <input value={currentCarouselItem.width}
        pattern="^(-?\d+(\.\d+)?(px|pt|rem|em|%)|auto)$"
        onChange={(e) => CarouselItemManager.updateWidth(selectedObject.uuid, e.currentTarget.value)}/>
      </label>
      <label data-tooltip="Scales with container height if a number">
        Height
        <input value={currentCarouselItem.height} 
        pattern="^(-?\d+(\.\d+)?(px|pt|rem|em|%)|auto)$"
        onChange={(e) => CarouselItemManager.updateHeight(selectedObject.uuid, e.currentTarget.value)}/>
      </label>
      <div className={styles['column-item']}>
        <label>Translate (X, Y, Z)</label>
        <div className={styles['row-item']}>
          <label data-tooltip="Scales with container width if a number">
            <input value={currentCarouselItem.translate.x} 
            pattern="^-?\d+(\.\d+)?(px|pt|rem|em|%)?"
            onChange={(e) => CarouselItemManager.updateTranslate(selectedObject.uuid, 'x', e.currentTarget.value)}/>
          </label>
          <label data-tooltip="Scales with container height if a number">
            <input value={currentCarouselItem.translate.y} 
            pattern="^-?\d+(\.\d+)?(px|pt|rem|em|%)?"
            onChange={(e) => CarouselItemManager.updateTranslate(selectedObject.uuid, 'y', e.currentTarget.value)}/>
          </label>
          <label data-tooltip="Scales with container width if a number">
            <input value={currentCarouselItem.translate.z} 
            pattern="^-?\d+(\.\d+)?(px|pt|rem|em|%)?"
            onChange={(e) => CarouselItemManager.updateTranslate(selectedObject.uuid, 'z', e.currentTarget.value)}/>
          </label>
        </div>
      </div>
      <div className={styles['column-item']}></div>
        <label>Rotate (X, Y, Z)</label>
        <div className={styles['row-item']}>
          <label data-tooltip="Degree">
            <input value={currentCarouselItem.rotate.x}
            type="number" 
            step="1"
            pattern="^-?\d+(\.\d+)?"
            onChange={(e) => CarouselItemManager.updateRotate(selectedObject.uuid, 'x', e.currentTarget.value)}/>
          </label>
          <label data-tooltip="Degree">
            <input value={currentCarouselItem.rotate.y} 
            type="number" 
            step="1"
            pattern="^-?\d+(\.\d+)?"
            onChange={(e) => CarouselItemManager.updateRotate(selectedObject.uuid, 'y', e.currentTarget.value)}/>
          </label>
          <label data-tooltip="Degree">
            <input value={currentCarouselItem.rotate.z} 
            type="number"
            step="1"
            pattern="^-?\d+(\.\d+)?"
            onChange={(e) => CarouselItemManager.updateRotate(selectedObject.uuid, 'z', e.currentTarget.value)}/>
          </label>
        </div>
      <div className={styles['column-item']}>
        <label>Offset (X, Y, Z)</label>
        <div className={styles['row-item']}>
          <label data-tooltip="Scales with carousel width if a number">
            <input value={currentCarouselItem.offset.x} 
            pattern="^-?\d+(\.\d+)?(px|pt|rem|em|%)?"
            onChange={(e) => CarouselItemManager.updateOffset(selectedObject.uuid, 'x', e.currentTarget.value)}/>
          </label>
          <label data-tooltip="Scales with carousel height if a number">
            <input value={currentCarouselItem.offset.y} 
            pattern="^-?\d+(\.\d+)?(px|pt|rem|em|%)?"
            onChange={(e) => CarouselItemManager.updateOffset(selectedObject.uuid, 'y', e.currentTarget.value)}/>
          </label>
          <label data-tooltip="Scales with carousel width if a number">
            <input value={currentCarouselItem.offset.z} 
            pattern="^-?\d+(\.\d+)?(px|pt|rem|em|%)?"
            onChange={(e) => CarouselItemManager.updateOffset(selectedObject.uuid, 'z', e.currentTarget.value)}/>
          </label>
        </div>
      </div>
    </>
  )
}

export default function Panel({selectedObject, setSelectedObject}: PanelProps): JSX.Element {
  return (
    <div className={`pico ${styles['container']}`}>
      {selectedObject instanceof Perspective && <PerspectivePanel/>}
      {selectedObject instanceof CarouselContainer && <CarouselContainerPanel/>}
      {selectedObject instanceof CarouselItem && <CarouselItemPanel selectedObject={selectedObject} setSelectedObject={setSelectedObject}/>}
    </div>
  )
}


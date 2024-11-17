import { useEffect, useRef } from "react";
import { PerspectiveCamera, Vector2, WebGLRenderer } from "three";
import { OrbitControls, TransformControls } from "three/examples/jsm/Addons.js";
import SceneStore from "@site/src/features/layout-editor/stores/SceneStore";
import Perspective from "@site/src/features/layout-editor/models/Perspective";
import CarouselItem from "@site/src/features/layout-editor/models/CarouselItem";
import CarouselItemManager from "@site/src/features/layout-editor/managers/CarouselItemManager";
import CarouselContainer from "@site/src/features/layout-editor/models/CarouselContainer";
import TranslateIcon from '@site/static/svg/translate.svg'
import RotateIcon from '@site/static/svg/rotate.svg'
import ScaleIcon from '@site/static/svg/scale.svg'
import styles from './styles.module.scss'
import PerspectiveManager from "../../../managers/PerspectiveManager";

type CanvasProps = {
  selectedObject: CarouselContainer | CarouselItem | Perspective
  setSelectedObject: (object: CarouselContainer | CarouselItem | Perspective) => void
  pauseRender: boolean
}

export default function Canvas({selectedObject, setSelectedObject, pauseRender}: CanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controlRef = useRef<TransformControls>(null)

  /**
   * Sync pauseRender with ref
   */
  const pauseRenderRef = useRef(pauseRender)

  useEffect(() => {
    pauseRenderRef.current = pauseRender
  }, [pauseRender])

  /**
   * Update TransformControls on selectedObject change
   */
  useEffect(() => {
    const control = controlRef.current
    if (!control) return

    if (selectedObject instanceof Perspective) {
      control.attach(selectedObject)
      control.setMode('translate')
      control.showX = false
      control.showY = false
      control.showZ = true
    } else if (selectedObject instanceof CarouselItem) {
      control.attach(selectedObject)
      control.showX = true
      control.showY = true
      control.showZ = true
    } else {
      control.detach()
    }
    
    const handleObjectChange = () => {
      if (selectedObject instanceof Perspective) {
        PerspectiveManager.updateWithTransformControls()
      }

      if (selectedObject instanceof CarouselItem) {
        CarouselItemManager.updateWithTransformControls(selectedObject, control.mode)
      }
    }

    control.addEventListener('objectChange', handleObjectChange)

    return () => {
      control.removeEventListener('objectChange', handleObjectChange)
    }
  }, [selectedObject])

  /*
   * Shortcut Key Handling
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (canvasRef.current !== document.activeElement) return
      
      switch (event.key) {
        case 'Delete':
          if (selectedObject instanceof CarouselItem) {
            CarouselItemManager.delete(selectedObject.uuid)
          }
          break
        case 't':
          controlRef.current.setMode('translate')
          break
        case 'r':
          if (selectedObject instanceof Perspective) return
          controlRef.current.setMode('rotate')
          break
        case 's':
          if (selectedObject instanceof Perspective) return
          controlRef.current.setMode('scale')
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }

  }, [selectedObject])


  /**
   * Init Canvas
   */
  useEffect(() => {
    const canvas = canvasRef.current

    const scene = SceneStore.scene

    // Set Renderer
    const renderer = new WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(
      canvas.clientWidth,
      canvas.clientHeight
    )

    // Set Camera
    const camera = new PerspectiveCamera()
    camera.position.set(15, 5, 20)
    camera.lookAt(0, 0, 0)

    // Set OrbitControls
    const orbit = new OrbitControls(camera, canvas)

    // Set TransformControls
    const control = new TransformControls(camera, renderer.domElement)
    controlRef.current = control
    control.addEventListener('dragging-changed', function (event) {
      orbit.enabled = !event.value
    })

    const gizmo = control.getHelper()
    gizmo.userData.isHelper = true  
    gizmo.traverse((child) => {
      child.userData.isHelper = true
    })
    scene.add(gizmo)

    // Set Raycaster
    const raycaster = control.getRaycaster()
    const mouse = new Vector2()

    const handleMouseDown = (event) => {
      const rect = canvas.getBoundingClientRect()

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }

    const handleMouseUp = (event) => {
      const rect = canvas.getBoundingClientRect()
      
      const prevMouse = { ...mouse }
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      const distance = Math.sqrt((prevMouse.x - mouse.x) ** 2 + (prevMouse.y - mouse.y) ** 2)
      if (distance > 0.01) return
      
      raycaster.setFromCamera(mouse, camera)
      let intersects = raycaster.intersectObjects(SceneStore.scene.children)
      intersects = intersects.filter(intersect => intersect.object.userData.isHelper !== true)
      
      if (intersects.length === 0) {
        setSelectedObject(SceneStore.carouselContainer)
      } else {
        const selectedObject = intersects[0].object.userData.isHandler ? intersects[0].object.parent : intersects[0].object
        setSelectedObject(selectedObject as CarouselItem | Perspective)
      }
    }

    const handleResize = () => {
      const container = canvas.parentElement

      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    handleResize()

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('resize', handleResize)

    const animate = () => {
      requestAnimationFrame(animate)

      if (pauseRenderRef.current) return
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)

      scene.remove(gizmo)
      gizmo.dispose()
      control.dispose()
      orbit.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className={`pico ${styles['canvas-container']}`}>
      <canvas ref={canvasRef} tabIndex={0}/>
      <div className={styles['button-container']}>
        <button onClick={() => {
          const carousel = CarouselItemManager.create()
          setSelectedObject(carousel)
        }}>Add Carousel</button>
        <div>
          <button data-tooltip="Translate" onClick={() => {controlRef.current.setMode('translate')}}><TranslateIcon/></button>
          <button data-tooltip="Rotate" disabled={selectedObject instanceof Perspective} onClick={() => {controlRef.current.setMode('rotate')}}><RotateIcon/></button>
          <button data-tooltip="Scale" disabled={selectedObject instanceof Perspective} onClick={() => {controlRef.current.setMode('scale')}}><ScaleIcon/></button>
        </div>
      </div>
    </div>
  )
}


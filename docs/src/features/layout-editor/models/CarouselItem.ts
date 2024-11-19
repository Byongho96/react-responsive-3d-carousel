
import { BufferGeometry, Camera, DoubleSide, Group, Material, MathUtils, Mesh, MeshBasicMaterial, PlaneGeometry, Quaternion, Scene, Vector3, WebGLRenderer } from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import fontJson from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { TextGeometry } from 'three/examples/jsm/Addons.js'
import { formatCssUnit, isNumeric, parseCssShorthand, parseCssUnit } from '../utils/cssUtils'
import CarouselContainer from './CarouselContainer'
import { SCENE_SCALE } from '../stores/SceneStore'

const fontLoader = new FontLoader()
const font = fontLoader.parse(fontJson)

class CarouselItem extends Mesh<PlaneGeometry, MeshBasicMaterial> {
  container: CarouselContainer
  
  index: string
  indexMesh: Mesh<TextGeometry, MeshBasicMaterial>

  width: string = 'auto'
  height: string = 'auto'
  translate : {
    x: string
    y: string
    z: string
  } = {
    x: '0',
    y: '0',
    z: '0'
  }
  rotate : {
    x: number
    y: number
    z: number
  } = {
    x: 0,
    y: 0,
    z: 0
  }
  offset : {
    x: string
    y: string
    z: string
  } = {
    x: '0',
    y: '0',
    z: '0'
  }


  constructor(container: CarouselContainer, index: string) {
    const geometry = new PlaneGeometry(1, 1)
    const material = new MeshBasicMaterial({ color: 0x888888, side: DoubleSide })
    super(geometry, material)

    this.name = 'Carousel Item'
    this.frustumCulled = false

    this.container = container
    this.index = index

    // TextMesh for index
    const indexGeometry = new TextGeometry(this.index, {
      font: font,
      size: 0.2,
      depth: 0.001,
    })
    const indexMaterial = new MeshBasicMaterial({ color: 0xffffff })
    this.indexMesh = new Mesh(indexGeometry, indexMaterial)
    this.indexMesh.userData.isHelper = true

    this.indexMesh.geometry.computeBoundingBox();
    const boundingBox = this.indexMesh.geometry.boundingBox;
    if (boundingBox) {
      const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
      const centerY = (boundingBox.max.y + boundingBox.min.y) / 2;
      this.indexMesh.geometry.translate(-centerX, -centerY, 0.001);
    }

    this.add(this.indexMesh)
  }

  // CSS Rotate3D to Quaternion
  private getCSSRotate3D() {
    const { x, y, z, w } = this.quaternion;
    const angle = 2 * Math.acos(w);
    const sinHalfAngle = Math.sqrt(1 - w * w) || 1; 
  
    const angleInDegrees = MathUtils.radToDeg(angle);
    return new Vector3(
      -x / sinHalfAngle * angleInDegrees,
      y / sinHalfAngle * angleInDegrees,
      -z / sinHalfAngle * angleInDegrees
    );
  }

  // Quaternion to CSS Rotate3D
  private applyCSSRotate3D() {
    const { x, y, z } = this.rotate;
    const angleInDegrees = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
  
    if (angleInDegrees === 0) {
      this.quaternion.identity();
      return;
    }
  
    const axis = new Vector3(-x, y, -z).normalize();
    const angleInRadians = MathUtils.degToRad(angleInDegrees);
  
    this.quaternion.setFromAxisAngle(axis, angleInRadians);
  }
  
  setIndex(index: string) {
    this.index = index
    this.indexMesh.geometry.dispose()
    this.indexMesh.geometry = new TextGeometry(this.index, {
      font: font,
      size: 0.2,
      depth: 0.001,
    })

    this.indexMesh.geometry.computeBoundingBox();
    const boundingBox = this.indexMesh.geometry.boundingBox;
    if (boundingBox) {
      const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
      const centerY = (boundingBox.max.y + boundingBox.min.y) / 2;
      this.indexMesh.geometry.translate(-centerX, -centerY, 0.001);
    }
  }

  onBeforeRender(renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group): void {
    super.onBeforeRender(renderer, scene, camera, geometry, material, group)

    const padding = parseCssShorthand(this.container.containerPadding, this.container.scale.x * SCENE_SCALE, this.container.scale.y * SCENE_SCALE)
 
    this.position.x = parseCssUnit(this.translate.x, {numericValue : this.container.scale.x * SCENE_SCALE, percentValue: this.scale.x * SCENE_SCALE}) 
      + parseCssUnit(this.offset.x, {numericValue: this.scale.x * SCENE_SCALE, percentValue: this.scale.x * SCENE_SCALE})
    this.position.y = parseCssUnit(this.translate.y, {numericValue : this.container.scale.y * SCENE_SCALE, percentValue: this.scale.y * SCENE_SCALE})
      + parseCssUnit(this.offset.y, {numericValue: this.scale.y * SCENE_SCALE, percentValue: this.scale.y * SCENE_SCALE})
    this.position.z = parseCssUnit(this.translate.z, {numericValue : this.container.scale.x * SCENE_SCALE, percentValue: 0})
      + parseCssUnit(this.offset.z, {numericValue: this.scale.x * SCENE_SCALE, percentValue: 0})
    this.position.x /= SCENE_SCALE
    this.position.y /= SCENE_SCALE
    this.position.z /= SCENE_SCALE

    if (this.width === 'auto') {
      this.scale.x = parseCssUnit(this.container.width, { numericValue: this.container.scale.x * SCENE_SCALE, percentValue: this.container.scale.x - padding.left - padding.right })
    } else {
      this.scale.x = parseCssUnit(this.width, { numericValue: this.container.scale.x * SCENE_SCALE, percentValue: this.container.scale.x - padding.left - padding.right })
    }
    if (this.height === 'auto') {
      this.scale.y = parseCssUnit(this.container.height, { numericValue: this.container.scale.y * SCENE_SCALE, percentValue: this.container.scale.y - padding.top - padding.bottom })
    } else {
      this.scale.y = parseCssUnit(this.height, { numericValue: this.container.scale.y * SCENE_SCALE, percentValue: this.container.scale.y - padding.top - padding.bottom })
    }
    this.scale.x /= SCENE_SCALE
    this.scale.y /= SCENE_SCALE
 

    this.applyCSSRotate3D()
  }

  updateTranslation() {
    const offsetX = parseCssUnit(this.offset.x, {numericValue: this.scale.x * SCENE_SCALE, percentValue: this.scale.x * SCENE_SCALE})
    const offsetY = parseCssUnit(this.offset.y, {numericValue: this.scale.y * SCENE_SCALE, percentValue: this.scale.y * SCENE_SCALE})
    const offsetZ = parseCssUnit(this.offset.z, {numericValue: this.scale.x * SCENE_SCALE, percentValue: 0})
    
    this.translate.x = formatCssUnit(this.translate.x, this.position.x * SCENE_SCALE - offsetX, {numericValue: this.container.scale.x * SCENE_SCALE, percentValue: this.scale.x * SCENE_SCALE})
    this.translate.y = formatCssUnit(this.translate.y, this.position.y * SCENE_SCALE - offsetY, {numericValue: this.container.scale.y * SCENE_SCALE, percentValue: this.scale.y * SCENE_SCALE})
    this.translate.z = formatCssUnit(this.translate.z, this.position.z * SCENE_SCALE - offsetZ, {numericValue: this.container.scale.x * SCENE_SCALE, percentValue: 0})
  
  }
  
  updateRotation() {
    const axis = this.getCSSRotate3D()

    this.rotate.x = axis.x
    this.rotate.y = axis.y
    this.rotate.z = axis.z
  }
  
  updateScale() {
    const padding = parseCssShorthand(this.container.containerPadding, this.container.scale.x * SCENE_SCALE, this.container.scale.y * SCENE_SCALE)

    this.width = formatCssUnit(this.width, this.scale.x * SCENE_SCALE, {numericValue: this.container.scale.x * SCENE_SCALE, percentValue: this.container.scale.x * SCENE_SCALE - padding.left - padding.right, autoValue: this.scale.x / this.container.scale.x * SCENE_SCALE})
    this.height = formatCssUnit(this.height, this.scale.y * SCENE_SCALE, {numericValue: this.container.scale.y * SCENE_SCALE, percentValue: this.container.scale.y * SCENE_SCALE - padding.top - padding.bottom, autoValue: this.scale.y / this.container.scale.y * SCENE_SCALE})
  }

  reset() {
    this.width = 'auto'
    this.height = 'auto'
    this.translate = {
      x: '0',
      y: '0',
      z: '0'
    }
    this.rotate = {
      x: 0,
      y: 0,
      z: 0
    }
    this.offset = {
      x: '0',
      y: '0',
      z: '0'
    }
  }

  dispose() {
    this.geometry.dispose()
    this.material.dispose()
    this.indexMesh.geometry.dispose()
    this.indexMesh.material.dispose()
  }

  toCarouselJSON() {
    return {
      width: isNumeric(this.width) ? parseFloat(this.width) : this.width,
      height: isNumeric(this.height) ? parseFloat(this.height) : this.height,
      translate: {
        x: isNumeric(this.translate.x) ? parseFloat(this.translate.x) : this.translate.x,
        y: isNumeric(this.translate.y) ? -1 * parseFloat(this.translate.y) : this.translate.y.startsWith('-') ? this.translate.y.slice(1) : `-${this.translate.y}`,
        z: isNumeric(this.translate.z) ? parseFloat(this.translate.z) : this.translate.z
      },
      rotate: {
        x: this.rotate.x,
        y: this.rotate.y,
        z: this.rotate.z
      },
      offset: {
        x: isNumeric(this.offset.x) ? parseFloat(this.offset.x) : this.offset.x,
        y: isNumeric(this.offset.y) ? -1 * parseFloat(this.offset.y) : this.offset.y.startsWith('-') ? this.offset.y.slice(1) : `-${this.offset.y}`,
        z: isNumeric(this.offset.z) ? parseFloat(this.offset.z) : this.offset.z
      }
    }
  }

  fromCarouselJSON(json: any) {
    this.width = `${json.width}`
    this.height = `${json.height}`
    this.translate.x = `${json.translate.x}`
    this.translate.y = `${json.translate.y}`.startsWith('-') ? `${json.translate.y}`.slice(1) : `-${json.translate.y}`
    this.translate.z = `${json.translate.z}`
    this.rotate.x = json.rotate.x
    this.rotate.y = json.rotate.y
    this.rotate.z = json.rotate.z
    this.offset.x = `${json.offset.x}`
    this.offset.y = `${json.offset.y}`.startsWith('-') ? `${json.offset.y}`.slice(1) : `-${json.offset.y}`
    this.offset.z = `${json.offset.z}`
  }
}

export default CarouselItem

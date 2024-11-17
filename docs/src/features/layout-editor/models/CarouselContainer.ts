import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from 'three';
import { isNumeric, parseCssShorthand, parseCssUnit } from '../utils/cssUtils';
import { SCENE_SCALE } from '../stores/SceneStore';

class CarouselContainer extends Line<BufferGeometry, LineBasicMaterial> {
  // Carousel Container
  containerWidth: string = '100%'
  containerHeight: string = 'auto'
  containerPadding: string = '1rem'

  // Default Carousel Item
  width: string = '400px'
  height: string = '300px'

  constructor() {
    const points = [
      new Vector3( -0.5,  0.5, 0 ),
      new Vector3( -0.5, -0.5, 0 ),
      new Vector3(  0.5, -0.5, 0 ),
      new Vector3(  0.5,  0.5, 0 ),
      new Vector3( -0.5,  0.5, 0 ),
    ];
    const geometry = new BufferGeometry().setFromPoints( points );
    const material = new LineBasicMaterial({
      color: 0xffffff
    });

    super( geometry, material );

    this.name = 'CarouselContainer';
    this.frustumCulled = false
    this.userData.isHelper = true;
  }

  onBeforeRender(renderer, scene, camera, geometry, material, group) {
    super.onBeforeRender(renderer, scene, camera, geometry, material, group);
    
    const padding = parseCssShorthand(this.containerPadding, this.scale.x * SCENE_SCALE, this.scale.y * SCENE_SCALE)
    
    if (this.containerWidth === 'auto') {
      this.scale.x = parseCssUnit(this.width, {}) 
      this.scale.x += padding.left + padding.right
    } else {
      this.scale.x = parseCssUnit(this.containerWidth, { percentValue: window.innerWidth })
    }

    if (this.containerHeight === 'auto') {
      this.scale.y = parseCssUnit(this.height, {})
      this.scale.y += padding.top + padding.bottom
    } else {
      this.scale.y = parseCssUnit(this.containerHeight, { percentValue: window.innerHeight })
    }

    this.scale.x /= SCENE_SCALE
    this.scale.y /= SCENE_SCALE
  }

  reset() {
    this.containerWidth = '100%'
    this.containerHeight = 'auto'
    this.containerPadding = '1rem'
    this.width = '400px'
    this.height = '300px'
  }

  dispose() {
    this.geometry.dispose()
    this.material.dispose()
  }

  toCarouselJSON() {
    return {
      containerWidth: this.containerWidth,
      containerHeight: this.containerHeight,
      containerPadding: this.containerPadding,
      width: isNumeric(this.width) ? parseFloat(this.width) : this.width,
      height: isNumeric(this.height) ? parseFloat(this.height) : this.height,
    }
  }
  
  fromCarouselJSON(json: any) {
    this.containerWidth = json.containerWidth
    this.containerHeight = json.containerHeight
    this.containerPadding = json.containerPadding
    this.width = `${json.width}`
    this.height = `${json.height}`
  }
}

export default CarouselContainer;
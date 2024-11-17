import { BufferGeometry, Camera, CameraHelper, Group, Material, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, SphereGeometry, WebGLRenderer } from "three";
import { formatCssUnit, isNumeric, parseCssUnit } from "../utils/cssUtils";
import CarouselContainer from "./CarouselContainer";
import { SCENE_SCALE } from "../stores/SceneStore";

class Perspective extends Mesh<SphereGeometry, MeshBasicMaterial> {
  perspective: string = '1'

  camera: PerspectiveCamera
  cameraHelper: CameraHelper
  targetContainer: CarouselContainer

  constructor(container: CarouselContainer) {
    
    const geometry = new SphereGeometry(0.5, 16, 16)
    const material = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
    super(geometry, material);
    
    this.name = 'Perspective';
    this.frustumCulled = false;
    
    this.targetContainer = container;
    
    this.camera = new PerspectiveCamera();
    this.add(this.camera)

    this.cameraHelper = new CameraHelper(this.camera);
    this.cameraHelper.userData.isHelper = true;
    this.add(this.cameraHelper);

    // CameraHelper matrixWorld always refers identity matrix
    this.cameraHelper.updateMatrixWorld = (force?: boolean) => {
      if ( this.cameraHelper.matrixAutoUpdate ) this.cameraHelper.updateMatrix();
      this.cameraHelper.matrixWorld.multiplyMatrices( this.cameraHelper.matrixWorld.identity(), this.cameraHelper.matrix );
      const children = this.cameraHelper.children;
      for ( let i = 0, l = children.length; i < l; i ++ ) {
        const child = children[ i ];
        child.updateMatrixWorld( force );
		  }
    }
  }

  onBeforeRender(renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group): void {
    super.onBeforeRender(renderer, scene, camera, geometry, material, group)

    this.position.z = parseCssUnit(this.perspective, { numericValue: this.targetContainer.scale.x * SCENE_SCALE })
    this.position.z /= SCENE_SCALE


    this.camera.aspect = this.targetContainer.scale.x / this.targetContainer.scale.y;
    this.camera.fov = Math.atan(this.targetContainer.scale.y / 2 / this.position.z) * (180 / Math.PI) * 2;
    this.camera.updateProjectionMatrix();

    this.cameraHelper.update();
  }

  updateTranslation() {
    this.perspective = formatCssUnit(this.perspective, this.position.z * SCENE_SCALE, { numericValue: this.targetContainer.scale.x * SCENE_SCALE })
  }

  reset() {
    this.perspective = '1'
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
    this.cameraHelper.dispose();
    this.targetContainer = null;
  }

  toCarouselJSON() {
    return {
      perspective: isNumeric(this.perspective) ? parseFloat(this.perspective) : this.perspective,
    }
  }

  fromCarouselJSON(json: any) {
    this.perspective = `${json.perspective}`
  }
}

export default Perspective;
import SceneStore from "../stores/SceneStore";

class PerspectiveManager {
  static updatePerspective(value: string) {
    SceneStore.perspective.perspective = value;
    SceneStore.notify('change');
  } 

  static updateWithTransformControls() {
    SceneStore.perspective.updateTranslation()
    SceneStore.notify('change')
  }
}

export default PerspectiveManager;
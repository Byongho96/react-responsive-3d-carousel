import SceneStore from "../stores/SceneStore";

class CarouselContainerManager {
  static updateContainerWidth(value: string) {
    SceneStore.carouselContainer.containerWidth = value;
    SceneStore.notify('change');
  }

  static updateContainerHeight(value: string) {
    SceneStore.carouselContainer.containerHeight = value;
    SceneStore.notify('change');
  }

  static updateContainerPadding(value: string) {
    SceneStore.carouselContainer.containerPadding = value;
    SceneStore.notify('change');
  }

  static updateWidth(value: string) {
    SceneStore.carouselContainer.width = value;
    SceneStore.notify('change');
  }

  static updateHeight(value: string) {
    SceneStore.carouselContainer.height = value;
    SceneStore.notify('change');
  }

}
export default CarouselContainerManager;
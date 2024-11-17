import CarouselItem from "../models/CarouselItem";
import SceneStore from "../stores/SceneStore";

class CarouselItemManager {
  static create() {
    // Find an unused index
    let index = 0
    const usedIndices = new Set(SceneStore.carouselItems.map(item => item.index));
    while (usedIndices.has(index.toString())) {
      index = index > 0 ? -index : -index + 1; // 0 → -1 → 1 → -2 → 2
    }
  
    const carousel = SceneStore.addCarousel(index.toString());
    SceneStore.notify('change');

    return carousel;
  }

  static updateIndex(uuid: string, value: string) {
    const item = SceneStore.carouselItems.find(item => item.uuid === uuid);
    if (!item) throw new Error(`CarouselItem not found: ${uuid}`);

    const isUsed = SceneStore.carouselItems.some(item => item.index === value.toString());
    if (isUsed) throw new Error(`Index already in use: ${value}`);

    item.setIndex(value.toString());
    SceneStore.notify('change');
  }

  static updateWidth(uuid: string, value: string) {
    const item = SceneStore.carouselItems.find(item => item.uuid === uuid);
    if (!item) throw new Error(`CarouselItem not found: ${uuid}`);

    item.width = value;
    SceneStore.notify('change');
  }

  static updateHeight(uuid: string, value: string) {
    const item = SceneStore.carouselItems.find(item => item.uuid === uuid);
    if (!item) throw new Error(`CarouselItem not found: ${uuid}`);

    item.height = value;
    SceneStore.notify('change');
  }

  static updateTranslate(uuid: string, axis: 'x' | 'y' | 'z', value: string) {
    const item = SceneStore.carouselItems.find(item => item.uuid === uuid);
    if (!item) throw new Error(`CarouselItem not found: ${uuid}`);

    item.translate[axis] = value;
    SceneStore.notify('change');
  }

  static updateRotate(uuid: string, axis: 'x' | 'y' | 'z', value: string) {
    const item = SceneStore.carouselItems.find(item => item.uuid === uuid);
    if (!item) throw new Error(`CarouselItem not found: ${uuid}`);

    item.rotate[axis] = parseFloat(value);
    SceneStore.notify('change');
  }

  static updateOffset(uuid: string, axis: 'x' | 'y' | 'z', value: string) {
    const item = SceneStore.carouselItems.find(item => item.uuid === uuid);
    if (!item) throw new Error(`CarouselItem not found: ${uuid}`);

    item.translate[axis] = value;
    SceneStore.notify('change');
  }

  static updateWithTransformControls(object: CarouselItem, mode: 'translate' | 'rotate' | 'scale') {
    switch (mode) {
      case 'translate':
        object.updateTranslation();
        break;
      case 'rotate':
        object.updateRotation();
        break;
      case 'scale':
        object.updateScale();
        break;
    }

    SceneStore.notify('change')
  }

  static delete(uuid: string) {
    const item = SceneStore.carouselItems.find(item => item.uuid === uuid);
    if (!item) throw new Error(`CarouselItem not found: ${uuid}`);

    if (item.index === 'default') return
    
    SceneStore.removeCarousel(uuid);
    SceneStore.notify('change');
  }
}

export default CarouselItemManager;
import { EventDispatcher } from 'three';
import Perspective from '../models/Perspective';
import CarouselContainer from '../models/CarouselContainer';
import CarouselItem from '../models/CarouselItem';
import CarouselScene from '../models/CarouselScene';

export const SCENE_SCALE = 100

interface EventMap {
  change: { type: 'change' };
  reset: { type: 'reset' };
}

class SceneStore extends EventDispatcher<EventMap> {
  scene: CarouselScene
  carouselContainer: CarouselContainer
  carouselItems: CarouselItem[] = []
  perspective: Perspective

  constructor() {
    super()

    // Default Scene
    this.scene = new CarouselScene();
    
    // Carousel Container
    this.carouselContainer = new CarouselContainer()
    this.scene.add(this.carouselContainer)
    
    // Default CarouselItem
    const carouselItem = new CarouselItem(this.carouselContainer, 'default')
    this.carouselItems.push(carouselItem)
    this.scene.add(carouselItem)

    // Perspective
    this.perspective = new Perspective(this.carouselContainer)
    this.scene.add(this.perspective)
  }

  addCarousel(index: string) {
    const carouselItem = new CarouselItem(this.carouselContainer, index)
    this.carouselItems.push(carouselItem)
    this.scene.add(carouselItem)
    return carouselItem
  }

  removeCarousel(uuid: string) {
    const carouselItem = this.carouselItems.find(carousel => carousel.uuid === uuid)
    if (!carouselItem) return

    this.carouselItems = this.carouselItems.filter(carousel => carousel.uuid !== uuid)
    this.scene.remove(carouselItem)
    carouselItem.dispose()
  }

  reset() {
    this.notify('reset')

    this.carouselContainer.reset()
    this.perspective.reset()

    this.carouselItems.forEach(carousel => {
      if (carousel.index === 'default') carousel.reset()
      else this.removeCarousel(carousel.uuid)
    })

  }

  toCarouselJSON() {
    return {
      ...this.carouselContainer.toCarouselJSON(),
      ...this.perspective.toCarouselJSON(),
      layout:  this.carouselItems.reduce((acc, carousel) => {
        acc[carousel.index] = carousel.toCarouselJSON()
        return acc;
      }, {})
    }
  }

  fromCarouselJSON(json: any) {
    this.reset()
    
    this.perspective.fromCarouselJSON(json)
    this.carouselContainer.fromCarouselJSON(json)
    this.carouselItems[0].fromCarouselJSON(json.layout.default)

    Object.entries(json.layout).forEach(([index, carouselJSON]: [string, any]) => {
      if (index === 'default') return
      const carouselItem = this.addCarousel(index)
      carouselItem.fromCarouselJSON(carouselJSON)
    })
  }

  notify(type: keyof EventMap) {
    this.dispatchEvent({ type })
  }
}

export default new SceneStore();

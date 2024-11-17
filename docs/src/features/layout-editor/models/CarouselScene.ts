import { AmbientLight, Color, GridHelper, Scene } from 'three';



class CarouselScene extends Scene {
  constructor() {
    super()

    this.name = 'CarouselScene';
    this.background = new Color().setHex( 0x111111 );

    // Add GridHelper
    const gridHelper = new GridHelper(40, 40, 0x238daf, 0x323232)
    gridHelper.userData.isHelper = true
    this.add(gridHelper)

    // Add AmbientLight
    const light = new AmbientLight(0xffffff, 1)
    this.add(light)
  }
}

export default CarouselScene;

<h1> <img src="./assets/logo.svg" alt="logo" width='30px'/> React Responsvie 3D Carousel</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Responsive 3D carousel component for React app. It's designed to be **easy to use**, and you can **customize** it to your style through a variety of props.

It supports TypeScript, and the last two versions of each browser.

## Demo Page & Links

<div align="center" style="margin: 20px 0;">

<img src="./assets/demo.gif" alt="demo" width='900'/>

</div>

- **[Demo Page](https://byongho96.github.io/react-responsive-3d-carousel)**
- [Github](https://github.com/Byongho96/react-responsive-3d-carousel)
- [npm](https://www.npmjs.com/package/react-responsive-3d-carousel)

## Features

<div align="center" style="margin: 20px 0;">

<img src="./assets/features.png" alt="features" width='700'/>

</div>

## Installation

Install the package with the following command. **React should be preinstalled**.

```bash
npm install react-responsive-3d-carousel
```

## Usage

You can pass down **any `<tag/>`** you want

```jsx
import React from 'react'
import { Carousel } from 'react-responsive-3d-carousel'

export default App() {
  return (
    <Carousel>
      <img src="https://source.unsplash.com/random/?dog" alt="sample-image-1" />
      <img src="https://source.unsplash.com/random/?cat" alt="sample-image-2" />
      <video src="https://source.unsplash.com/random/?river" alt="sample-video" muted autoPlay loop />
      <iframe src="https://www.youtube.com/embed/Rrf8uQFvICE"/>
      <div>
        <p>Hello</p>
      </div>
    </Carousel>
  )
}
```

If you **don't** pass down the `<image/>`, `<video/>`, or `<iframe/>` tag **directly**, the following **CSS styles** must be applied to render as expected.

```jsx
import React from 'react'
import { Carousel } from 'react-responsive-3d-carousel'

export default App() {
  return (
    <Carousel>
      <a href="https://unsplash.com/">
        <img
          src="https://source.unsplash.com/random/?dog"
          alt="sample-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </a>
    </Carousel>
  )
}
```

## Props

| Name                    | Type                       | Default                  | Description                                                            |
| ----------------------- | -------------------------- | ------------------------ | ---------------------------------------------------------------------- |
| width                   | string                     | '500px'                  | The width of each carousel item<br/> All CSS length unit is available  |
| height                  | string                     | '300px'                  | The height of each carousel item<br/> All CSS length unit is available |
| spread                  | 'wide', 'normal', 'narrow' | 'wide'                   | The extent to carousel items are spread out                            |
| depth                   | number                     | 1                        | The 3D Depth of carousel                                               |
| autoPlay                | boolean                    | true                     | Automatically play carousel slide animation or not                     |
| interval                | number                     | 3000                     | Slide transition time interval (ms)                                    |
| transitionTime          | number                     | 500                      | Slide transition animation time (ms)                                   |
| infiniteLoop            | boolean                    | true                     | Carousel slide animation indefinitely or not                           |
| startIndex              | number                     | 0                        | The first carousel item index to be centered                           |
| showStatus              | boolean                    | true                     | Whether to display top right status text (Ex: `2/5`)                   |
| statusSize              | 'small', 'medium', 'large' | 'small'                  | The size of status text                                                |
| statusColor             | string                     | 'rgb(255, 255, 255)'     | The color of status text                                               |
| showArrows              | boolean                    | true                     | Whether arrow buttons are displayed at both ends                       |
| arrowsWidth             | string                     | '3.2rem'                 | The width of each arrow <br/> All CSS length unit is available         |
| arrowsHeight            | string                     | '5rem'                   | The height of each arrow <br/> All CSS length unit is available        |
| arrowsDefaultColor      | string                     | 'rgb(255, 255, 255)'     | The color of arrows not hovered                                        |
| arrowsHoveredColor      | string                     | 'rgba(34, 34, 34, 0.53)' | The color of arrows hovered                                            |
| arrowsStrokeWidth       | number                     | 5                        | The stroke width of arrows path                                        |
| showIndicators          | boolean                    | true                     | Whether to display bottom indicators                                   |
| indicatorsSize          | 'small', 'medium', 'large' | 'small'                  | The size of indicators                                                 |
| indicatorsActiveColor   | string                     | 'rgb(255, 255, 255)'     | The color of an indicator activated                                    |
| indicatorsInactiveColor | string                     | 'rgba(67, 67, 67, 0.4)'  | The color of indicators inactivated                                    |

## Customizing

If necessary, you can **override** the CSS with `important!`.  
The class name can be found in the browser's developer tool or [source code](https://github.com/Byongho96/react-responsive-3d-carousel/tree/main/src/components).

```css
.react-responsive-3d-carousel__indicators__item svg {
  width: 3rem !important;
  height: 3rem !important;
}
```

<img src="./assets/customization.png" alt="features" width='900'/>

## Contributing

Since this is my first npm pacakge. Welcome to conributing.  
Here's [contributing guide](https://github.com/Byongho96/react-responsive-3d-carousel/blob/main/CONTRIBUTING.md) contains details on how to setup dev environment.

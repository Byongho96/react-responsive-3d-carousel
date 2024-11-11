---
sidebar_position: 1
---

# Custom Layout

Define customized layouts for each carousel item, allowing control over individual item sizes, positions, and rotations. The `CarouselLayoutInfo` configuration enables flexible and responsive design for each item based on its relative position in the carousel.

## LayoutInfo

`LayoutInfo` provides the foundation for carousel item layouts, including settings for size, position, translation, and rotation. Each property within `LayoutInfo` is configurable, with values relative to the container or item dimensions. By default, items are centered in the container.

```ts
export type LayoutInfo = {
  width?: number | string
  height?: number | string
  translate: {
    x: number | string 
    y: number | string
    z: number | string 
  }
  rotation: {
    x: number
    y: number
    z: number
  }
  offset: {
    x: number | string 
    y: number | string
    z: number | string 
  }
}
```
- **width**
  - Defines the width of the item. If a numeric value is given, it is proportional to the container width.
  - Defaults to the carousel `width` prop when undefined or set to `'auto'`.
- **height**
  - Defines the height of the item. If a numeric value is given, it is proportional to the container height.
  - Defaults to the carousel `height` prop when undefined or set to `'auto'`.
- **translate** 
  - Sets translations along the x, y, and z axes, moving the item in the specified directions.
  - When `x` and `z` are numeric, they are proportional to the container’s width.
  - When `y` is numeric, it is proportional to the container’s height.
- **rotation**
  - Specifies the rotation of the item, in degrees, for each axis (x, y, z).
- **offset**
  - Adjusts the item’s position relative to its own dimensions, allowing fine-tuned alignment.
  - When `x` and `z` are numeric, they are proportional to the item’s width.
  - When `y` is numeric, it is proportional to the item’s height.

:::warning

Since changes to width and height require relatively heavier CSS calculations, it’s important to evaluate their impact on performance.

:::

## CarouselLayoutInfo

`CarouselLayoutInfo` applies `LayoutInfo` configurations to each carousel item by index, including a `default` layout that is used when no specific layout is provided.

```ts
export type CarouselLayoutInfo = {
  default: LayoutInfo
  [key: number]: LayoutInfo
}
```

- **0**: The currently selected item
- **Positive numbers**: Upcoming items in the carousel
- **Negative numbers**: Previous items in the carousel

This structure gives you full control over how items appear based on their position within the carousel, enabling unique and dynamic layouts.

## Example

Below is an example of how to set up `CarouselLayoutInfo` for a custom layout. Each `LayoutInfo` entry can be adjusted to create responsive and visually appealing arrangements.

Even the `default` layout is defined with `CarouselLayoutInfo` data. [See Full Example on GitHub](https://github.com/Byongho96/react-responsive-3d-carousel/tree/main/src/utils/getCarouselIndex.ts).

```tsx live
function CarouselWithCustomLayout(props) {
  const layout = {
    default: {
      translate: {
        x: 0,
        y: 0,
        z: -2,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      offset: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    0: {
      translate: {
        x: 0.5,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      offset: {
        x: -0.5,
        y: 0,
        z: 0,
      },
    },
    1: {
      translate: {
        x: -0.5,
        y: 0,
        z: -1,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      offset: {
        x: 0.5,
        y: 0,
        z: 0,
      },
    },
  }

  return <Carousel layout={layout} perspectiveOrigin='top' containerHeight='500px'/>;
}
```
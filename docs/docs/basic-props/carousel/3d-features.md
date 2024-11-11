---
sidebar_position: 2
---

# 3D Features

The carousel's 3D features provide powerful customization options to create a unique, visually engaging experience. Use the following properties to adjust depth, layout, and overall visual perspective.

## perspective

* **Default** : `'auto'`
* **Type** : `string`

Defines the distance from the viewer's point of view to the carousel, similar to the [CSS perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) property. A smaller value increases the depth, making items appear larger in the positive Z-axis and smaller in the negative Z-axis. Conversely, a larger value minimizes the depth effect.

When set to `'auto'`, perspective adjusts proportionally to the container's width.

```tsx live
<Carousel perspective='auto' /> 
```

## perspectiveOrigin

* **Default** : `'center'`
* **Type** : `string`

Sets the origin point from which the viewer observes the carousel, following the [CSS perspective-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin) property.

```tsx live
<Carousel perspectiveOrigin='center' /> 
```

## layout

* **Default** : `'default'`
* **Type** : `'default' | CarouselLayoutInfo`

When set to `'default'`, the carousel uses the standard layout, which can be adjusted further with defaultOption.

For advanced control, use `CarouselLayoutInfo` to set custom placement for each item. For detailed guidance, see [Custom Layout](../advanced-api/custom-layout).


## defaultOption

Applies when layout is set to `'default'`. Customize the carousel's appearance with the following properties:

### .numOfSlides

* **Default** : `'auto'`
* **Type** : `'auto' | 2 | 3 | 5`

Sets the number of visible slides. When set to `'auto'`, the carousel displays 2, 3, or 5 slides based on the item count. Set a fixed number to maintain a consistent slide count.

```tsx live
<Carousel defaultOption={{ numOfSlides: 'auto' }} /> 
```

### .widthFactor

* **Default** : `1`
* **Type** : `number`

Controls the horizontal width of the carousel. Smaller values narrow the carousel, while larger values make it wider.

```tsx live
<Carousel defaultOption={{ widthFactor: 1 }} /> 
```


### .depthFactor

* **Default** : `1`
* **Type** : `number`

Adjusts the spacing between items along the Z-axis. Smaller values reduce spacing, creating a compact look, while larger values increase the spacing.

```tsx live
<Carousel defaultOption={{ depthFactor: 1 }} /> 
```


### .angleFactor

* **Default** : `1`
* **Type** : `number`

Sets the rotation angle of items in the carousel. Multiply this factor to adjust the angle, where smaller values create a subtle rotation and larger values increase the rotation.

```tsx live
<Carousel defaultOption={{ angleFactor: 1 }} /> 
```

## children

* **Type** : `ReactNode | ReactNode[]`
* **Default** : `undefined`

The `children` prop lets you add additional elements to the 3D space outside the carousel items. These elements remain stationary as the carousel rotates. Position elements freely using `translate3d` to create layouts with added depth and dimension.

```tsx live
<Carousel>
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, -10px)',
    padding: '2em',
    borderRadius: '50%',
    backgroundColor: 'pink',
    color: 'white',
    fontWeight: 'bold',
  }}>Peek A Boo</div>
</Carousel> 
```




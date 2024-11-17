---
sidebar_position: 3
---

# Transition

Customize the animation and transition settings of the carousel for smooth and dynamic visual effects.

## Slide Animation

Controls the automatic sliding behavior and loop settings for a seamless carousel experience.

### autoPlay

* **Default** : `true`
* **Type** : `boolean`

Enables automatic slide transitions within the carousel.

```tsx live
<Carousel autoPlay={true} /> 
```


### interval

* **Default** : `3000`
* **Type** : `number`

Specifies the time interval, in milliseconds, for auto-slide transitions when `autoPlay` is enabled.

```tsx live
<Carousel interval={3000}/> 
```


### infiniteLoop

* **Default** : `true`
* **Type** : `boolean`

Allows the carousel to loop back to the beginning after the last slide, or to the end when moving in reverse, creating an infinite sliding effect.

```tsx live
<Carousel infiniteLoop={true}/> 
```

## Transform

The carousel layout is calculated and positioned using only the [CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) property, which enables lightweight rendering operations. As a result, you can customize carousel transition animations by defining transition properties specifically for transform.

### transformDuration

* **Default** : `1000`
* **Type** : `number`

Sets the duration of the transition effect in milliseconds.

```tsx live
<Carousel transformDuration={1000}/> 
```

### transformTimingFn

* **Default** : `'ease-in-out'`
* **Type** : `string`'

Defines the timing function for transition animations, following the [CSS transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) property.

```tsx live
<Carousel transformTimingFn='ease-in-out' /> 
```

## Size

The size refers to the width and height of carousel items. In the default layout, the size is fixed, but with a custom layout, the size of each carousel item can vary based on its index.

:::warning

Since changes to width and height require relatively heavier CSS calculations, it’s important to evaluate their impact on performance.

:::

### sizeDuration

* **Default** : `1000`
* **Type** : `number`

Sets the duration of the transition effect in milliseconds.

```tsx live
function CarouselWithSizeTransition(props) {
  const layout = {
    'default' : {
      width: '200px',
      height: '200px',
      translate: {
        x: -0.5,
        y: 0,
        z: 0,
      },
      rotate: {
        x: 0,
        y: 0,
        z: 0,
      },
      offset: {
        x: 0.6,
        y: 0,
        z: 0,
      },
    },
    0: {
      width: '400px',
      height: '300px',
      translate: {
        x: 0.5,
        y: 0,
        z: 0,
      },
      rotate: {
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
  }

  return <Carousel layout={layout} sizeDuration={1000} />;
}
```

### sizeTimingFn

* **Default** : `'ease-in-out'`
* **Type** : `string`

Defines the timing function for transition animations, following the [CSS transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) property.

```tsx live
function CarouselWithSizeTransition(props) {
  const layout = {
    'default' : {
      width: '200px',
      height: '200px',
      translate: {
        x: -0.5,
        y: 0,
        z: 0,
      },
      rotate: {
        x: 0,
        y: 0,
        z: 0,
      },
      offset: {
        x: 0.6,
        y: 0,
        z: 0,
      },
    },
    0: {
      width: '400px',
      height: '300px',
      translate: {
        x: 0.5,
        y: 0,
        z: 0,
      },
      rotate: {
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
  }

  return <Carousel layout={layout} sizeTimingFn='ease-in-out' />;
}
```

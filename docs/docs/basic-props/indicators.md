---
sidebar_position: 3
---

# Indicators

The indicators are the small dots displayed at the bottom of the carousel that represent the total number of slides and the current slide position. Users can click on the indicators to navigate to a specific slide.

## showIndicators

* **Default** : `true`
* **Type** : `boolean`

Determines whether to display the indicators.

```tsx live
<Carousel showIndicators={true} />
```

## Indicators Props

The following properties are effective only when `showIndicators` is `true`. All properties should be included within the `indicators` object.

### indicators.width

* **Default** : `'0.7rem'`
* **Type** : `string`

Sets the width of the indicators. Any CSS length unit can be used.

```tsx live
<Indicators width='0.7rem' />
```

### indicators.height

* **Default** : `'0.7rem'`
* **Type** : `string`

Defines the height of the indicators. Any CSS length unit can be used.

```tsx live
<Indicators height='0.7rem' />
```

### indicators.gap

* **Default** : `'1.5rem'`
* **Type** : `string`

Specifies the gap between each indicator. Any CSS length unit can be used.

```tsx live
<Indicators gap='1.5rem' />
```

### indicators.color

* **Default** : `'#ffffff'`
* **Type** : `string`

Specifies the default color of the indicators. Any CSS color value can be used.

```tsx live
<Indicators color='#ffffff' />
```

### indicators.activeColor

* **Default** : `'#888888'`
* **Type** : `string`

Sets the color of the active indicator, including its color when hovered. Any CSS color value can be used.

```tsx live
<Indicators activeColor='#888888' />
```

### indicators.shadow

* **Default** : `'0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)'`
* **Type** : `string`

Sets the shadow of the indicators. You can apply any value compatible with the [CSS drop-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow) property.


```tsx live
<Indicators shadow='0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)' />
```

### indicators.indicatorIcon

* **Default** : `undefined`
* **Type** : `JSX.Element`

Sets a custom icon for the indicators.

:::tip

 When using an `SVGElement` as a custom icon, add the attribute `preserveAspectRatio="none"` to ensure compatibility with `indicators.width` and `indicators.height`. For compatibility with `indicators.color` and `indicators.activeColor`, set any color-related attributes to `"currentColor"`.

:::

```tsx live
function IndicatorsWithCustomNextIcon(props) {
  const indicatorIcon = <svg
    preserveAspectRatio="none"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>

  return <Indicators indicatorIcon={indicatorIcon} width='1.2rem' height='1.2rem' />;
}
```
### indicators.translate

* **Default** : `['0px', '0px']`
* **Type** : `[string, string]`

Adjusts the position of the previous the indicators. The first index represents movement along the x-axis, and the second index represents movement along the y-axis.

```tsx live
<Indicators translate={['0px', '0px']} />
```

### indicators.onClick

* **Default** : `undefined`
* **Type** : `(e: React.MouseEvent, index: number) => void`

A callback function that triggers when an indicator is clicked. 

```tsx live
<Indicators onClick={(_e, index) => alert(`Indicator ${index} is clicked`)} />
```
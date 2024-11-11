---
sidebar_position: 1
---

# 2D Features

A range of 2D features that allow for extensive customization of the carousel’s appearance and layout. Each setting can help you adjust the container and items to best fit your design.

## Container

Settings for customizing the carousel container, including dimensions, padding, and accessibility attributes.

### ariaLabel

* **Default** : `'3d carousel'`
* **Type** : `string`

Specifies an accessible label for the carousel container. This is useful for screen readers and improves accessibility.

### containerWidth

* **Default** : `'100%'`
* **Type** : `string`

Specifies the width of the carousel container. You can use any valid CSS unit to define this value.

```tsx live
<Carousel containerWidth='50%' /> 
```

### containerHeight

* **Default** : `'auto'`
* **Type** : `string`

Specifies the height of the carousel container. You can use any valid CSS unit for this value.

:::warning

If the `height` prop is set to a responsive value like `'auto'`, `'*%'`, or `number`, then `containerHeight` must be fixed to avoid layout issues.

:::

```tsx live
<Carousel containerHeight='200px' /> 
```

### containerPadding

* **Default** : `'1rem'`
* **Type** : `string`

Defines the space between the carousel container’s edge and the inner carousel items. You can use any CSS unit for this value.

:::tip

Since the container has `overflow: hidden` applied, adding padding can create a subtle shadow effect around the items for a more natural look.
:::

```tsx live
<Carousel containerPadding='0' /> 
```

## Carousel Items

Settings for customizing the dimensions and appearance of individual carousel items.

### width

* **Default** : `'400px'`
* **Type** : `string | number`

Sets a consistent width for all carousel items. You can use any CSS unit for this value.

```tsx live
<Carousel width='20em' /> 
```

If a numeric value is given, it will represent a percentage of the container’s width.

```tsx live
<Carousel width={0.4} /> 
```

If set to `'auto'`, the width will automatically adjust based on the item’s aspect ratio.

```tsx live
<Carousel width='auto'/> 
```

### height

* **Default** : `'300px'`
* **Type** : `string | number`

Defines the height of carousel items. Any CSS unit can be used.

```tsx live
<Carousel height='15em' /> 
```

If a numeric value is given, the height is proportional to the container’s height.

```tsx live
<Carousel height={0.8} containerHeight='350px' /> 
```

If set to `'auto'`, the height will adjust based on the item’s aspect ratio.

```tsx live
<Carousel width='250px' height='auto' containerHeight='350px' /> 
```

### align

* **Default** : `'center'`
* **Type** : `'top' | 'center' | 'bottom'`

Specifies the vertical alignment of carousel items within the container. Particularly useful when items vary in height or the container height exceeds the item height.

```tsx live
<Carousel align='top' width='250px' height='auto' containerHeight='350px' />
```

### boxShadow

* **Default** : `'0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)'`
* **Type** : `string`

Applies a shadow effect to carousel items using the [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) property.

```tsx live
<Carousel boxShadow='0 0.1rem 0.5rem rgba(0, 0, 0, 0.5)' /> 
```

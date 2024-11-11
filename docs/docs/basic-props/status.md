---
sidebar_position: 4
---

# Status

The status component displays the current slide number and the total number of slides in the carousel. It is displayed at the bottom of the carousel and is updated as the user navigates through the slides.

## showStatus

- **Default** : `true`
- **Type** : `boolean`

Determines whether to display the status component.

```tsx live
<Carousel showStatus={true} />
```

## Status Props

The following properties are effective only when `showStatus` is `true`. All properties should be included within the `status` object.

### status.color

- **Default** : `'#ffffff'`
- **Type** : `string`

Specifies the default color of the status text. Any CSS color value can be used.

```tsx live
<Status color='#ffffff' />
```

### status.fontSize

- **Default** : `'1rem'`
- **Type** : `string`

Sets the font size of the status text. Any CSS length unit can be used.

```tsx live
<Status fontSize='1rem' />
```

### status.fontWeight

- **Default** : `'600'`
- **Type** : `string`

Defines the font weight of the status text. Any CSS font weight value can be used.

```tsx live
<Status fontWeight='600' />
```

### status.shadow

- **Default** : `'0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)'`
- **Type** : `string`

Sets the shadow effect for the status text. You can apply any value compatible with the [CSS text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) property.

```tsx live
<Status shadow='0 0.05rem 0.1rem rgba(0, 0, 0, 0.5)' />
```

### status.translate

* **Default** : `['0px', '0px']`
* **Type** : `[string, string]`

Adjusts the position of the status. The first index represents movement along the x-axis, and the second index represents movement along the y-axis.

```tsx live
<Status translate={['0px', '0px']} />
```
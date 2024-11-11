---
sidebar_position: 2
---

# Arrows

The arrows displayed on each side of the carousel allow users to navigate through slides. Clicking an arrow moves the carousel to the next or previous slide.

## showArrows

* **Default** : `true`
* **Type** : `boolean`

Determines whether to display the navigation arrows.

```tsx live
<Carousel showArrows={true} />
```

## Arrows Props

The following properties are effective only when `showArrows` is `true`. All properties should be included within the `arrows` object.

### arrows.width

* **Default** : `'3rem'`
* **Type** : `string`

Sets the width of the navigation arrows. Any CSS length unit can be used.

```tsx live
<Arrows width='3rem' />
```

### arrows.height

* **Default** : `'5rem'`
* **Type** : `string`

Defines the height of the navigation arrows. Any CSS length unit can be used.

```tsx live
<Arrows height='5rem' />
```

### arrows.color

* **Default** : `'#ffffff'`
* **Type** : `string`

Specifies the default color of the arrows. Any CSS color value can be used.

```tsx live
<Arrows color='#ffffff' />
```

### arrows.hoverColor

* **Default** : `#888888`,
* **Type** : `string`

Sets the color of the arrows when hovered over with the mouse. Any CSS color value can be used.

```tsx live
<Arrows hoverColor='#888888' />
```

### arrows.shadow

* **Default** : `'0 0.05rem 0.1rem rgba(0, 0, 0, 0.3)'`
* **Type** : `string`

Adds a shadow effect to the arrows. You can apply any value compatible with the [CSS drop-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow) property.

```tsx live
<Arrows shadow='0 0.05rem 0.1rem rgba(0, 0, 0, 0.3)' />
```

### arrows.prevIcon

* **Default** : `undefined`
* **Type** : `JSX.Element`

Sets a custom icon for the previous arrow.

:::tip

 When using an `SVGElement` as a custom icon, add the attribute `preserveAspectRatio="none"` to ensure compatibility with `arrows.width` and `arrows.height`. For compatibility with `arrows.color` and `arrows.hoverColor`, set any color-related attributes to `"currentColor"`.

::: 

```tsx live
function ArrowsWithCustomPrevIcon(props) {
  const prevIcon = <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 8 8 12 12 16"></polyline>
    <line x1="16" y1="12" x2="8" y2="12"></line>
  </svg>
  return <Arrows prevIcon={prevIcon} />;
}
```

### arrows.nextIcon

* **Default** : `undefined`
* **Type** : `JSX.Element`

Sets a custom icon for the next arrow.

:::tip

 When using an `SVGElement` as a custom icon, add the attribute `preserveAspectRatio="none"` to ensure compatibility with `arrows.width` and `arrows.height`. For compatibility with `arrows.color` and `arrows.hoverColor`, set any color-related attributes to `"currentColor"`.
 
::: 

```tsx live
function ArrowsWithCustomNextIcon(props) {
  const nextIcon = <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 16 16 12 12 8"></polyline>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>

  return <Arrows nextIcon={nextIcon} />;
}
```

### arrows.prevIconTranslate

* **Default** : `['0px', '0px']`
* **Type** : `[string, string]`

Adjusts the position of the previous arrow icon. The first index represents movement along the x-axis, and the second index represents movement along the y-axis.

```tsx live
<Arrows prevIconTranslate={['0px', '0px']} />
```


### arrows.nextIconTranslate

* **Default** : `['0px', '0px']`
* **Type** : `[string, string]`

Adjusts the position of the next arrow icon. The first index represents movement along the x-axis, and the second index represents movement along the y-axis.

```tsx live
<Arrows nextIconTranslate={['0px', '0px']} />
```

### arrows.onClickPrev

* **Default** : `undefined`
* **Type** : `React.MouseEventHandler`

Defines the function to execute when the prev arrow is clicked.

```tsx live
<Arrows onClickPrev={(_e) => console.log('prev arrow clicked')} />
```

### arrows.onClickNext

* **Default** : `undefined`
* **Type** : `React.MouseEventHandler`

Defines the function to execute when the next arrow is clicked.

```tsx live
<Arrows onClickNext={(_e) => console.log('next arrow clicked')} />
```
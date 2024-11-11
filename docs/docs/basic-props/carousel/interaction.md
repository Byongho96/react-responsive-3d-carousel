---
sidebar_position: 4
---

# Interaction

Customize user interaction settings for the carousel, including focus, hover, and swipe behaviors.

## focusOnSelect

* **Default** : `true`
* **Type** : `boolean`

Determines whether clicking on a carousel item sets it as the currently active item in the carousel.

```tsx live
<Carousel focusOnSelect={true} /> 
```

## pauseOnHover

* **Default** : `true`
* **Type** : `boolean`

Pauses auto-play when hovering over a carousel item.

```tsx live
<Carousel pauseOnHover={true} /> 
```

## autoFocus

* **Default** : `false`
* **Type** : `boolean`

Specifies whether the carousel should automatically receive focus when it loads.

```tsx live
<Carousel autoFocus={false} /> 
```

## slideWithKeyboard

* **Default** : `'horizontal'`
* **Type** : `'none' | 'horizontal' | 'vertical' | 'both'`

Allows navigation through slides using the keyboard when the carousel is focused.

* `'none'` : Disables keyboard navigation.
* `'horizontal'` : Uses <kbd>Left</kbd> and <kbd>Right</kbd> keys to navigate.
* `'vertical'` : Uses <kbd>Up</kbd> and <kbd>Down</kbd> keys to navigate.
* `'both'` : Enables navigation with <kbd>Left</kbd>, <kbd>Right</kbd>, <kbd>Up</kbd>, and <kbd>Down</kbd> keys.

```tsx live
<Carousel slideWithKeyboard='horizontal' /> 
```


## swipeable

* **Default** : `true`
* **Type** : `boolean`

Enables swipe gestures for navigating slides on touch devices.

```tsx live
<Carousel swipeable={true} /> 
```

## swipeDirection

* **Default** : `'horizontal'`
* **Type** : `'horizontal' | 'vertical'`

Valid only when `swipeable` is enabled. Specifies the swipe direction.

* `'horizontal'` : Allows left and right swipe gestures.
* `'vertical'` : Allows up and down swipe gestures.

```tsx live
<Carousel swipeable={true} swipeDirection='horizontal' /> 
```
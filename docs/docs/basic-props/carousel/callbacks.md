---
sidebar_position: 5
---

# Callbacks

These are callback functions that respond to specific carousel events.

## onChange

* **Default** : `undefined`
* **Type** : `(curIndex: number, item: JSX.Element) => void`

A callback function triggered when the carousel’s current index changes.

* `curIndex` : The index of the current item
* `item` : The current item

```tsx live
<Carousel onChange={(currentIndex) => console.log(currentIndex)} /> 
```

## onClickItem

* **Default** : `undefined`
* **Type** : `(e: React.MouseEvent, index: number, item: JSX.Element, isCurIndex: boolean) => void`

Called when a carousel item is clicked.

* `e` : The click event
* `index` : The index of the clicked item
* `item` : The clicked item
* `isCurtIndex` : Indicates whether the clicked item is the currently active item

```tsx live
<Carousel onClickItem={
  (_, index, _item, _isCurIndex) => alert(`${index} is clicked`)} /> 
```

## onSwipeStart

* **Default** : `undefined`
* **Type** : `(e: React.TouchEvent) => void | undefined`

Triggered when a touch swipe gesture starts.

```tsx live
<Carousel onSwipeStart={(e) => console.log('Swipe Start')} /> 
```

## onSwipeMove

* **Default** : `undefined`
* **Type** : `(e: React.TouchEvent) => void | undefined`

Called continuously during a touch swipe.

```tsx live
<Carousel onSwipeMove={(e) => console.log('Swiping')} /> 
```

## onSwipeEnd

* **Default** : `undefined`
* **Type** : `(e: React.TouchEvent) => void | undefined`

Called when a touch swipe gesture ends.

```tsx live
<Carousel onSwipeEnd={(e) => console.log('Swipe End')} /> 
```
---
sidebar_position: 3
---

# CSS Customization

The carousel is fully customizable, allowing you to override its default CSS styles. To prevent style conflicts, all class names are prefixed with  `react-responsive-3d-carousel`. Refer to the images below for a detailed breakdown of each class name.

## Carousel

The following image shows the available class names for customizing the carousel layout and styling.

![carousel classnames](/img/classname-carousel.png)

## Arrows

- The `*-container` class positions the component with `position: absolute` and applies `pointer-events: none` to prevent interference with user interactions over carousel items.
- Customize each arrow button using the `button` child selector.

![arrows classnames](/img/classname-arrows.png)

## Status and Indicators

- The `*-container` classes position the components with `position: absolute` and applies `pointer-events: none` to prevent interference with user interactions over carousel items.
- Use the `p` child selector to style the status text.
- Style the indicators using the `ul` and `li` child selectors.

![status and indicators classnames](/img/classname-status-indicators.png)

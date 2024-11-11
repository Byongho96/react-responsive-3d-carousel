---
sidebar_position: 1
---

# Installation

To use React Responsive 3D Carousel in your project, follow the simple installation steps below. This guide covers multiple installation options, compatibility with different package managers, and basic usage examples to help you get started quickly.

## Requirements

Make sure you have React installed in your project, as this library requires **React 17 or later**.

## Installation

You can install the library with the following command:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm">
    ```bash
    npm install react-responsive-3d-carousel
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```bash
    yarn add react-responsive-3d-carousel
    ```
  </TabItem>
</Tabs>


## Basic Usage

After installing the library, you can start using the 3D Carousel component in your project. Here's a quick example:

```tsx
import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';  

// Can be any JSX.Element tag
const items = [
  <img src="image1.jpg" alt="Image 1" />,
  <video src="video1.mp4" autoPlay />,
  <div>Custom Content 1</div>,
];

function App() {
  return (
    <div className="App">
      <Carousel
        items={items}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
      />
    </div>
  );
}

export default App;
```

:::caution

It is important to import the provided CSS styles to ensure the carousel is displayed correctly.

:::

:::tip Bundled Version

If you prefer a fully bundled version that includes CSS and JavaScript. Use this:  
`import 'react-responsive-3d-carousel/dist/index.esm.min.js';`  

:::
import React from 'react';
import Carousel from '@site/src/components/Carousel';
import Arrows from '@site/src/components/Arrows';
import Indicators from '@site/src/components/Indicators';
import Status from '@site/src/components/Status';


// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,
  Carousel,
  Arrows,
  Indicators,
  Status,
};

export default ReactLiveScope;

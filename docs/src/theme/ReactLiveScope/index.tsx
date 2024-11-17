import React from 'react';
import Carousel from '@site/src/features/docs/components/Carousel';
import Arrows from '@site/src/features/docs/components/Arrows';
import Indicators from '@site/src/features/docs/components/Indicators';
import Status from '@site/src/features/docs/components/Status';


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

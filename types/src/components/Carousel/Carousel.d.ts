import React from 'react';
import './Carousel.scss';
export interface CarouselProps {
    children: React.ReactNode[];
    width?: string;
    height?: string;
    autoPlay?: boolean;
    interval?: number;
    transitionTime?: number;
    infiniteLoop?: boolean;
    startIdx?: number;
    showArrows?: boolean;
    showStatus?: boolean;
    showIndicators?: boolean;
}
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;

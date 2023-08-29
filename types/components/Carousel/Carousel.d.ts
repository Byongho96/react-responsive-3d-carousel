import React from 'react';
import './Carousel.scss';
export interface CarouselProps {
    children: React.ReactNode | React.ReactNode[];
    width?: string;
    height?: string;
    depth?: number;
    autoPlay?: boolean;
    interval?: number;
    transitionTime?: number;
    infiniteLoop?: boolean;
    startIndex?: number;
    showStatus?: boolean;
    statusSize?: 'small' | 'medium' | 'large';
    statusColor?: string;
    showArrows?: boolean;
    arrowsWidth?: string;
    arrowsHeight?: string;
    arrowsDefaultColor?: string;
    arrowsHoveredColor?: string;
    arrowsStrokeWidth?: number;
    showIndicators?: boolean;
    indicatorsSize?: 'small' | 'medium' | 'large';
    indicatorsActiveColor?: string;
    indicatorsInactiveColor?: string;
}
/**
 *
 * @param children Carousel items
 * @param width Width of a carousel item
 * @param height Height of a carousel item
 * @param depth 3D depth of carousel
 * @param autoPlay Automatically play the carousel
 * @param interval Time interval before the next carousel item (ms)
 * @param transitionTime Time interval for sliding (ms)
 * @param infiniteLoop Infinite loop for sliding the carousel (ms)
 * @param startIndex Index of carousel items to start the slide
 * @param showStatus Whether to show top right status
 * @param statusSize Size of status
 * @param statusColor Color of status
 * @param showArrows Whether to show arrow buttons on both sides
 * @param arrowsWidth Width of an arrow
 * @param arrowsHeight Height of an arrow
 * @param arrowsDefaultColor Color of arrows not hovered
 * @param arrowsHoveredColor Color of arrows hovereds
 * @param arrowsStrokeWidth Stroke width of arrows svg path
 * @param showIndicators Whether to show the bottom indicators
 * @param indicatorsSize Size of indicators
 * @param indicatorsActiveColor Color of an active indicator
 * @param indicatorsInactiveColor Color of inactive indicators
 * @returns
 */
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;

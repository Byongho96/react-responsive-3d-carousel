import React from 'react';
import './Arrows.scss';
export interface ArrowsProps {
    onClickLeft: () => void;
    onClickRight: () => void;
    width?: string;
    height?: string;
    defaultColor?: string;
    hoveredColor?: string;
    strokeWidth?: number;
    isShadow?: boolean;
}
/**
 * Arrows on both sides of the carousel
 * @param onClickLeft Function to run when left arrow clicked
 * @param onClickRight Function to run when right arrow clicked
 * @param width Width of an arrow
 * @param height Height of an arrow
 * @param defaultColor Color of arrows not hovered
 * @param hoveredColor Color of arrows hovered
 * @param isShadow Is there shadow in the arrows
 */
declare const Arrows: React.FC<ArrowsProps>;
export default Arrows;

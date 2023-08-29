import React from 'react';
import './Arrows.scss';
export interface ArrowsProps {
    onClickLeft: () => void;
    onClickRight: () => void;
}
declare const Arrows: React.FC<ArrowsProps>;
export default Arrows;

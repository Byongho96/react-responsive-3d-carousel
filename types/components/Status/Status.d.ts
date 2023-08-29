import React from 'react';
import './Status.scss';
export interface StatusProps {
    length: number;
    index: number;
    size?: 'small' | 'medium' | 'large';
    color?: string;
}
/**
 * Status at the top right of the carousel
 * @param length Value to be displayed on the right of '/'
 * @param index (Value - 1) to be displayed on the left of '/'
 * @param size Size of status
 * @param activeColor Color of status font
 */
declare const Status: React.FC<StatusProps>;
export default Status;

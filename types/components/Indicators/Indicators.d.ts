import React from 'react';
import './Indicators.scss';
export interface IndicatorsProps {
    length: number;
    index: number;
    size?: 'small' | 'medium' | 'large';
    activeColor?: string;
    inactiveColor?: string;
    isShadow?: boolean;
    onClick: (i: number) => void;
}
/**
 * Indicators at the bottom of the carousel
 * @param length Total number of indiactors
 * @param index Index of active indicator
 * @param size Size of indicators
 * @param activeColor Color of an active indicator
 * @param inactiveColor Color of inactive indicators
 * @param isShadow Is there shadow in the indicators
 * @param onClick Function to run when each indicator is clicked
 */
declare const Indicators: React.FC<IndicatorsProps>;
export default Indicators;

import React from 'react';
import './Indicators.scss';
export interface IndicatorsProps {
    length: number;
    index: number;
    onClick: (n: number) => void;
}
declare const Indicators: React.FC<IndicatorsProps>;
export default Indicators;

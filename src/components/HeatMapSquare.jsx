import React from 'react';

const style = (performanceRatio) => {
    return {
        backgroundColor: 'blue',
        opacity: performanceRatio,
        width: '50px',
        height: '50px'
    };
}

const HeatMapSquare = (props) => {
    let performanceRatio = props.value / props.maxValue;
    return (
        <div style={style(performanceRatio)}></div>
    );
}

export default HeatMapSquare;

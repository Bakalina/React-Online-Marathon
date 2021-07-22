import React from 'react';




export default function Button(){

    const elementStyle = {
        color:'rgb(18, 255, 18)',
        backgroundColor: 'transparent',
        border: '0px',
        fontFamily:'Courier',
        fontSize:'33pt'
    }

    return <button data-testid="element-button" style={elementStyle}>Wake up Neo...</button>;
}

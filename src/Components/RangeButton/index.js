import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RangeButton(){
    const [range, setRange] = useState(0);
    const changeRange = (event) => {
        setRange(event.target.value);
    }
    return(   
        <input type="range" id="volume" min={1} step={1} max={60} value={range} onChange={changeRange}/>
    )
    
}

export default RangeButton;
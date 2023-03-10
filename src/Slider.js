import React from 'react'

export default function Slider(props) {
  return (
    <div className="slider-container">
      <input
        className="slider"
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}    
        onChange={props.onChange}

        />
    </div>
  );
}

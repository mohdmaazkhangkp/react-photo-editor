import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];
  const clickHandler = (i)=>{
    setSelectedOptionIndex(i);
   // console.log(i);
  }
  const sliderChangehandler = (event)=>{
      setOptions((prevOption)=>{
        return prevOption.map((option, index)=>{
          if(index!==selectedOptionIndex) return option;
          return{...option, value: event.target.value};
        })
      })
  }
const getImageStyle = ()=>{
  const filters = options.map(option=>{
    return `${option.property}(${option.value}${option.unit})`;
  })
  return {filter: filters.join(' ')};
}

  return (
    <div className='container'>
      <div className='main-image' style={getImageStyle()}></div>
      <div className='sidebar'>
        {options.map((option, index)=>{
          return (<SidebarItem
          key={index}
          index={index}
          name={option.name}
          onClick = {clickHandler}
          active={index===selectedOptionIndex}
          />);
        })}
      </div>
      <Slider
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      value={selectedOption.value}
      onChange={sliderChangehandler}
      />
    </div>
        );
}

export default App;
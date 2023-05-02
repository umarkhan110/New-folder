import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const YearSlider = ({ onChange }) => {
  const [year, setYear] = useState([2019, 2022]);

  const handleYearChange = (value) => {
    setYear(value);
    onChange(value);
  };

  return (
    <div>
      <p>Selected year:  {year[0]} - {year[1]}</p>
      <Slider
      range
        min={2019}
        max={2022}
        defaultValue={year}
        onChange={handleYearChange}
        trackStyle={{ backgroundColor: '#007bff' }}
        handleStyle={{
          borderColor: '#007bff',
          backgroundColor: '#007bff',
        }}
        railStyle={{ backgroundColor: '#e9ecef' }}
      />
    </div>
  );
};
export default YearSlider;
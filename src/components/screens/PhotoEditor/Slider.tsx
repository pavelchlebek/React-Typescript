import * as React from 'react';

import classes from './PhotoEditor.module.css';

type TProps = NoChildren & {
  min: number
  max: number
  value: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Slider: React.FC<TProps> = ({ min, max, value, handleChange }) => {
  return (
    <div className={classes.sliderContainer}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={classes.slider}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

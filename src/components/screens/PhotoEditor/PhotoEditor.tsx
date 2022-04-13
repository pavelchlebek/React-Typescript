import * as React from 'react';

import classes from './PhotoEditor.module.css';
import { SidebarItem } from './SidebarItem';
import { Slider } from './Slider';

type TProps = NoChildren

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
]

export const PhotoEditor: React.FC<TProps> = () => {
  const [options, setOptions] = React.useState(DEFAULT_OPTIONS)
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0)
  const selectedOption = options[selectedOptionIndex]

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: parseInt(e.target.value) }
      })
    })
    // console.log(selectedOption)
  }

  const getImageStyle = (): React.CSSProperties => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(" ") }
  }

  console.log(getImageStyle())

  return (
    <div className={classes.container}>
      <div className={classes.mainImage} style={getImageStyle()} />
      <div className={classes.sidebar}>
        {options.map((option, index) => {
          return (
            <SidebarItem
              handleClick={() => setSelectedOptionIndex(index)}
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
            />
          )
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  )
}

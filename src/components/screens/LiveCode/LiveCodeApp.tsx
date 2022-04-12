import * as React from 'react';

import axios from 'axios';

import countries from './data';
import classes from './LiveCodeApp.module.css';

type TProps = NoChildren

// interface ICoords {
//   lat: number
//   lng: number
// }

interface IResult {
  sunrise: string
  sunset: string
}

const apiUrl = "https://api.sunrise-sunset.org/json"

export const LiveCodeApp: React.FC<TProps> = () => {
  const [date, setDate] = React.useState("")
  const [country, setCountry] = React.useState("")

  // const [coords, setCoords] = React.useState<ICoords>({ lat: 50, lng: -15 })
  const [result, setResult] = React.useState<IResult>()

  // React.useEffect(() => {

  // }, [country])

  const getSunsetAndSunrise = () => {
    const currentCountry = countries.find((item) => item.country === country)
    if (currentCountry) {
      const { latitude, longitude } = currentCountry
      axios
        .get(`${apiUrl}?lat=${latitude}&lng=${longitude}&date=${date}`)
        .then((response) => setResult(response.data.results))
        .catch((err) => console.log("Request error: ", err))
    }
  }

  console.log("country: ", country)

  return (
    <div className={classes.content}>
      Date: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      Country:{" "}
      <select onChange={(e) => setCountry(e.target.value)} name="cars" id="cars">
        {countries.map((country: any, countryIdx: any) => {
          return (
            <option key={countryIdx} value={country.country}>
              {country.country}
            </option>
          )
        })}
      </select>
      <button onClick={() => getSunsetAndSunrise()}>Show</button>
      {result ? (
        <div
          className={classes.output}
        >{`Sunrise: ${result.sunrise} Sunset: ${result.sunset}`}</div>
      ) : (
        <div className={classes.danger}>Data not fetched</div>
      )}
    </div>
  )
}

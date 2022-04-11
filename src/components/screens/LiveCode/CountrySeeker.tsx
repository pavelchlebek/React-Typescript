import * as React from 'react';

import countries from './data';

type TProps = NoChildren

export const CountrySeeker: React.FC<TProps> = () => {
  const [lat, setLat] = React.useState(0)
  const [lng, setLng] = React.useState(0)
  const [country, setCountry] = React.useState("")

  const getCountry = () => {
    const countriesDiff = countries.map((item) => {
      const diff = Math.abs(Math.pow(item.latitude - lat, 2) + Math.pow(item.longitude - lng, 2))
      return {
        country: item.country,
        diff: diff,
      }
    })
    let resultCountry = countriesDiff[0]
    countriesDiff.forEach((item) => {
      if (item.diff < resultCountry.diff) resultCountry = item
    })
    setCountry(resultCountry.country)
  }

  return (
    <div style={{ margin: "150px" }}>
      Latitude: <input type="number" onChange={(e) => setLat(parseFloat(e.target.value))} />
      Longitude: <input type="number" onChange={(e) => setLng(parseFloat(e.target.value))} />
      <button onClick={getCountry}>Get Country</button>
      Country: {country ? country : "No result"}
    </div>
  )
}

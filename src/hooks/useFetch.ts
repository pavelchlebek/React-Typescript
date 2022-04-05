import React, { useEffect } from 'react';

import axios from 'axios';

// useFetch hook that is typically used for fetching initial data for cmp (eg. screen)
const useFetch = (url: string) => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

// same hook as above but written using async / await
const useFetch2 = (url: string) => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<any>(null)

  useEffect(() => {
    setLoading(true)
    async function fetchData(url: string) {
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData(url)
  }, [url])

  return { data, loading, error }
}
export default useFetch2

// fetch data function with callback fn that can be used to setState in the cmp
export const fetchDataSet = async (url: string, setFunction: (data: any) => void) => {
  try {
    const response = await axios.get(url)
    setFunction(response.data)
  } catch (err) {
    console.error("Request failed: ", err)
  }
}

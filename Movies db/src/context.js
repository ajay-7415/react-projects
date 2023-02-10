import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIES_API_KEY}`
const AppContext = React.createContext()

console.log(API_ENDPOINT)

const AppProvider = ({ children }) => {
  const [error, setError] = useState({ show: false, msg: '' })
  const [loading, setLoading] = useState(true)
  const [movies, Setmovies] = useState(null)
  const [query, setquery] = useState('batman')

  const fetchMovies = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        Setmovies(data.Search)
        console.log(data)
        setError({ show: false, msg: '' })
      } else {
        console.log(data)
        setError({ show: true, msg: data.Error })
      }

      setLoading(false)

      console.log(movies)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query])

  return (
    <AppContext.Provider value={{ loading, error, movies, setquery, query }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

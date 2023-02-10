import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('a')
  const [cocktail, setCocktail] = useState([])

  const fetchDrinks = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}${search}`)
      const data = await response.json()
      console.log(data)
      const { drinks } = data
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktail(newCocktails)
      } else {
        setCocktail([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [search])
  return (
    <AppContext.Provider value={{ loading, cocktail, setSearch }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [singleCocktail, setsingleCocktail] = React.useState(null)
  React.useEffect(() => {
    setLoading(true)
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data)
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: Instructions,
            strIngredient1: ingredient,
          } = data.drinks[0]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            Instructions,
            ingredient,
          }
          setsingleCocktail(newCocktail)
        } else {
          setsingleCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!singleCocktail) {
    return <h2 className='section-tittle'>no cocktail to display</h2>
  }
  const { name, image, category, info, glass, Instructions, ingredient } =
    singleCocktail

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        backhome
      </Link>
      <h2 className='section-tittle'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <p>
          <span className='drink-data'>name:</span>
          {name}
        </p>
        <p>
          <span className='drink-data'>category:</span>
          {category}
        </p>
        <p>
          <span className='drink-data'>info:</span>
          {info}
        </p>
        <p>
          <span className='drink-data'>glass:</span>
          {glass}
        </p>
        <p>
          <span className='drink-data'>instruction:</span>
          {Instructions}
        </p>
      </div>
    </section>
  )
}

export default SingleCocktail

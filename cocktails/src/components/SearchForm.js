import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { loading, cocktail } = useGlobalContext()
  const { setSearch } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearch(searchValue.current.value)
  }
  return (
    <section className='secton search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm

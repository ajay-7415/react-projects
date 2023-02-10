import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setquery, error } = useGlobalContext()
  return (
    <form
      action='search-form'
      onSubmit={(e) => e.preventDefault()}
      className='search'
    >
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )

  return <h2>search component</h2>
}

export default SearchForm

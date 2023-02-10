import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlepage } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlepage('dec')}>
        prev
      </button>
      {page + 1} of {nbPages}
      <button disabled={isLoading} onClick={() => handlepage('inc')}>
        Next
      </button>
    </div>
  )
}

export default Buttons

import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-conatiner'>
        <h1>oops! its a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          back to home
        </Link>
      </div>
    </section>
  )
}

export default Error

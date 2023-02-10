import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeModal } = useGlobalContext()
  return (
    <section className='hero' onMouseOver={closeModal}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>payments infrastructure for the internet</h1>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSideBar, openModal, closeModal } = useGlobalContext()
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempbtn = e.target.getBoundingClientRect()
    console.log(tempbtn)
    const center = (tempbtn.left + tempbtn.right) / 2
    console.log(center)
    const bottom = tempbtn.bottom - 3
    openModal(page, { center, bottom })
  }
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='stripe' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li className='link-btn' onMouseOver={displaySubmenu}>
            products
          </li>
          <li className='link-btn' onMouseOver={displaySubmenu}>
            developers
          </li>

          <li className='link-btn' onMouseOver={displaySubmenu}>
            company
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=oDYMPpiTioxjdDAJD4IR8AigsITdb_Wzpnz_ooHpalI`

const searchUrl = `https://api.unsplash.com/search/photos/?client_id=oDYMPpiTioxjdDAJD4IR8AigsITdb_Wzpnz_ooHpalI`
const mainUrl = `https://api.unsplash.com/photos/?client_id=oDYMPpiTioxjdDAJD4IR8AigsITdb_Wzpnz_ooHpalI`

function App() {
  const [page, setPage] = useState(0)

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState('')
  const fetchImages = async () => {
    const urlQuery = `&query=${query}`
    const urlPage = `&page=${page}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setPhotos((oldPhots) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhots, ...data.results]
        } else {
          return [...oldPhots, ...data]
        }
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldpage) => {
          const newPage = oldpage + 1
          return newPage
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchImages()
  }

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search'
            className='form-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />
          })}
        </div>
        {loading && <h2 className='loading'>loading</h2>}
      </section>
    </main>
  )
}

export default App

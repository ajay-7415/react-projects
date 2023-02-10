import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(2)
  const [folowers, setFollowers] = useState([])

  const handlePage = (index) => {
    setPage(index)
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prvPage = oldPage - 1
      if (prvPage < 0) {
        prvPage = data.length - 1
      }
      return prvPage
    })
  }
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])
  return (
    <main>
      <div className='section-tittle'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {folowers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prec
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? `active-btn` : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App

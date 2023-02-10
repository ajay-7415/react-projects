import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removestory } = useGlobalContext()
  console.log(isLoading)

  if (isLoading) {
    console.log(isLoading)
    return <div className='loading'></div>
  }

  return (
    <section className='stories'>
      {hits.map((hit) => {
        const { objectID, title, url, num_comments, points, author } = hit
        console.log(hit)
        return (
          <article key={objectID} className='story'>
            <h4 className='tittle'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} |</span>
              {num_comments}
            </p>
            <div>
              <a href={url} className='read-link' target='_blank'>
                read mores
              </a>
              <button
                className='remove-btn'
                onClick={() => removestory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories

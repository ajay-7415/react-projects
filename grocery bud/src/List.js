import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items }) => {
  return (
    <div className='grocery-list'>
      {items?.map((item) => {
        const { id, tittle } = item
        return (
          <article key={id} className='grocery-item'>
            <p className='tittle'>{tittle}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn'>
                <FaEdit />
              </button>
              <button type='button' className='delete-btn'>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List

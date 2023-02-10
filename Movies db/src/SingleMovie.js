import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setmovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovie = async (url) => {
    const response = await fetch(`url`)
    const data = response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}?i=${id}`)
  }, [id])
  console.log(id)

  return <h4>hi</h4>
}

export default SingleMovie

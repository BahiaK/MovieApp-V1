import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data}) => {
  return (
    <div className='cards'>
        {data.map((el)=><MovieCard el={el} />)}
    </div>
  )
}

export default MovieList
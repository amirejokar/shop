import React from 'react'
import './index.css'
import poster from './poster-final.jpg'

export default function ImagePoster() {
  return (
    <div className='img-poster'>
        <img src={poster} alt="khoshkele" />
    </div>
  )
}

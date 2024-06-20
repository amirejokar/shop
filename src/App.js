import React from 'react'
import './App.css'
import Topbar from './Components/Topbar'
import Cards from './Components/Cards'
import Posters from './Components/Poster'
export default function App() {
  return (
    <div>
        <Topbar/>
        <Cards/>
        <Posters/>
    </div>
  )
}

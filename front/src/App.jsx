import './App.css'
import Cards from './components/Cards/Cards'
import NavBar from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { useState } from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'




function App() {
  const [characters, setCharacters] = useState([])
  const URL_BASE = 'https://rym2.up.railway.app/api/character/'
  const API_KEY = 'henrystaff'
  const onSearch = (id) => {
    if (!id) return alert('ingresa un ID')
    if (characters.find(char => char.id === parseInt(id))) return alert(`Ya existe el personaje con el id ${id}`)
    
    axios.get(`${URL_BASE}${id}?key=${API_KEY}`)
    .then(({data}) => {
    
      if (data.name) {
        setCharacters([data, ...characters])
      }else {
        alert('No hay personajes con ese ID')
      }  
    })
    .catch(err => alert(err.message))
  }
  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }
  
  return (
    <div className='App'>
      <NavBar onSearch={onSearch} />

      <Routes> 
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={ <About/> } />
        <Route path='/detail/:id' element={ <Detail/> } />
      </Routes>

      <h1>Hi, are you ok?</h1>
      <h1 style={{fontSize: '100px'}}>👍👍👍</h1>
    </div>
  )
}

export default App

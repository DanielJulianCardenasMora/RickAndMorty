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
  // const URL_BASE = 'https://rym2.up.railway.app/api/character/'
  // const API_KEY = 'henrystaff' ?key=${API_KEY}
  const URL_BASE = 'https://rickandmortyapi.com/api/character/'


  const onSearch = (id) => {
    if (!id) return alert('ingresa un ID')
    if (characters.find(char => char.id === parseInt(id))) return alert(`Ya existe el personaje con el id ${id}`)
    
    axios.get(`${URL_BASE}${id}`)
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
      {/* <div style={sectionStyle}> */}

      <Routes> 
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={ <About/> } />
        <Route path='/detail/:id' element={ <Detail/> } />
      </Routes>
      

      {/* </div> */}
      <h1>Hi</h1>
      {/* <button class="button-64" role="button"><span class="text">Button 64</span></button> */}
      <h1 style={{fontSize: '100px'}}>👍👍👍</h1>
    </div>
  )
}

export default App

import './App.css'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import { useState } from 'react'
import axios from 'axios';




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
      <Cards characters={characters} onClose={onClosecd} />
      <h1>Hello world</h1>
    </div>
  )
}

export default App

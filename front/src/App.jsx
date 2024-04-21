import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './App.css'
import Cards from './components/Cards/Cards'
import NavBar from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'




function App() {
  const { pathname } = useLocation()
  const [access, setAccess] = useState(false)
  const [characters, setCharacters] = useState([])
  const navigate = useNavigate()
  // const URL_BASE = 'https://rym2.up.railway.app/api/character/'
  // const API_KEY = 'henrystaff' ?key=${API_KEY}
  // const URL_BASE = 'https://rickandmortyapi.com/api/character/'
  // const URL = "http://localhost:3001/rickandmorty/character/"
  const URL_ID = 'https://rickandmortyback-production-e81f.up.railway.app/rickandmorty/character/'
  const EMAIL = ''
  const PASSWORD = ''
  
  const onSearch = async (id) => {
    try {
      if (!id) return alert("Ingresa un ID");
      if (characters.find((char) => char.id === parseInt(id)))
        return alert(`Ya existe el personaje con el id ${id}`);
      const { data } = await axios.get(`${URL_ID}${id}`);
      if (data.name) {
        setCharacters([data, ...characters]);
      } else {
        alert(`No hay personajes con el id ${id}`);
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  async function login(userData){
    try {
      const { email, password } = userData;
      const URL = 'https://rickandmortyback-production-e81f.up.railway.app/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      // { data: { access: true } }
      setAccess(data);
      access && navigate('/home');

      if(!access) return alert('Credenciales incorrectas!');
      
    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    // !access && navigate('/home')
    !access && navigate('/')
  }, [access])
  
  return (
    <div className='App'>
      {pathname != '/' && <NavBar onSearch={onSearch} />}
      <Routes> 
        <Route path='/' element={<Form login={login} />}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={ <About/> } />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}





export default App

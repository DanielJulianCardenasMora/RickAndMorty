import {useState} from 'react'
import style from './SearchBar.module.css'







function SearchBar(props) {
   const [id, setId] = useState('')
   
   const handleChange = (evento) => {
      setId(evento.target.value)
   }
   
   const search = () => {
      props.onSearch(id)
      setId('')
   }

   return (
      <div className={style.divSearch}>
         <input
            className="inpSearch"
            type='search'
            placeholder="ingresa un ID hasta 826"
            value = {id}
            onChange={handleChange} />
         <button className={style.botones} onClick={search}><span class="text">
            Agregar</span></button> 
      </div>
   );
}

export default SearchBar



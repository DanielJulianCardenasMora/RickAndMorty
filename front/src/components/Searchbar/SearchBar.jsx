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
            className={style.inpSearch}
            type='search'
            placeholder="Ingresa id max 826"
            value = {id}
            onChange={handleChange} />
         <button className={style.botones} onClick={search}><span>
            AGREGAR</span></button> 
      </div>
   );
}

export default SearchBar



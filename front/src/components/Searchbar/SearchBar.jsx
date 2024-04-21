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
   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        search();
      }
    };

   return (
      <div className={style.divSearch}>
         <input
            className={style.inpSearch}
            type='search'
            placeholder="Enter a number max 826"
            value = {id}
            onChange={handleChange}
            onKeyPress={handleKeyPress} />
         <button className={style.botones} onClick={search}><span>
            ADD</span></button> 
      </div>
   );
}

export default SearchBar



import {useState} from 'react'








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
      <div className="divSearch">
         <input
            className="inpSearch"
            type='search'
            placeholder="ingresa un ID hasta 826"
            value = {id}
            onChange={handleChange} />
         <button
            className='botAgregar'
            onClick={search}>Agregar</button> 
      </div>
   );
}

export default SearchBar
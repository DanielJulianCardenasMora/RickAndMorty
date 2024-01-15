import { Link } from "react-router-dom"
import style from './Card.module.css'








export default function Card({id, name, species, status, gender, origin, image, onClose}) {
   return (
      <div className={style.cardUnica}>

         <div className={style.imgRow}>
            <div className={style.imgContainer}>
               <img
                  className='imgCard'
                  src={image}
                  alt='image' />
            </div>

         </div>


         <div className={style.firstRow}>
            <div className={style.rowName}>
               <Link to={`/detail/${id}`}>
                  <p>
                     {name}
                  </p>
               </Link>
            </div>

            <div className={style.rowSpecies}>
               <p>
                  {species}
               </p>   
            </div>      
            
            {/* <h2>
               {status}
            </h2> */}
            {/* <h2>
               {gender}
            </h2>
            <h2>
               {origin}
            </h2> */}
         </div>

         <div className={style.secondRow}>
            <div className={style.secondRowId}>
               <p>
                  {id}
               </p>
            </div>

            <div className={style.secondRowBot}>
               <button
                  className={style.closeCard}
                     onClick={() => onClose(id)}>x</button>
            </div>  
         </div>
      </div>
      
   )
}

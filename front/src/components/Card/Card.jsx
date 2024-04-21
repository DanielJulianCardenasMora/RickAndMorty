import { Link, useLocation } from "react-router-dom"
import style from './Card.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import { useEffect, useState } from "react";




export default function Card({ id, name, species, status, gender, origin, image, onClose }) {
   const [isFav, setIsFav]= useState(false)
   const state = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();
   const {pathname} = useLocation()

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      }
      else if (!isFav) {
         setIsFav(true)
         dispatch(addFav({ id, name, species, status, origin, image, gender }))
      }
   }

   useEffect(() => {
      state.forEach((fav) => {
         fav.id === id && setIsFav(true)
      });
   }, []);

   return (
      <div className={style.box}>
       {
            isFav ? (
                  <button className={style.like} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.like} onClick={handleFavorite}>🤍</button>
            )
         }
                        {
                  pathname === '/home'&& <button className={style.closeCard}
                     onClick={() => onClose(id)}>x</button>   
                  }
         <Link to={`/detail/${id}`}>
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
                  <p>
                     {name}
                  </p>
            </div>
           
            <div className={style.rowSpecies}>
               <p>
                  {species}
               </p>   
            </div>      
         </div>

         <div className={style.secondRow}>
            <div className={style.secondRowId}>
               <p>
                  {id}
               </p>
            </div>

            <div className={style.secondRowBot}>
  

            </div>  
         </div>
      </div>
         </Link>
         <div className={style.spacer}></div>
      </div>
   )
}

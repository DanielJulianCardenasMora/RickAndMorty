








export default function Card({id, name, species, status, gender, origin, image, onClose}) {
   return (
      <div className='cardUnica'>
         <button
            className='closeCard'
            onClick={()=> onClose(id)}>x</button>
         <h2>{id}</h2>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img
            className='imgCard'
            src={image}
            alt='image' />
      </div>
   )
}

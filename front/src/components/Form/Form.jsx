import { useState } from 'react'
import validation from './validation'

function Form({login}) {
    const [userData, setUserData] = useState({
        email: '',
        password:''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (evento)=>{
        setErrors(validation({ ...userData, [evento.target.name]: evento.target.value }))
        setUserData({ ...userData, [evento.target.name]: evento.target.value })

    }
    const handleSubmit = (evento) => {
        evento.preventDefault()
        login(userData)
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor='email'>
                  Email:
                  <input type='text'
                      placeholder='Ingresa un email'
                      id='email'
                      name='email'
                      value={userData.email}
                      onChange={handleChange}
                  />
                  
              </label>
              {errors.email && <p>{errors.email}</p>}

              <br />
              
              <label htmlFor='password'>
                  Password:
                  <input type='text'
                      placeholder='Ingresa una contraseña'
                      id='password'
                      name='password'
                      value={userData.password}
                      onChange={handleChange}
                  />
                  
              </label>
              { errors.password && <p>{errors.password}</p> }
              <br/>
              <button>Submit</button>
          </form>
    </div>
  )
}

export default Form
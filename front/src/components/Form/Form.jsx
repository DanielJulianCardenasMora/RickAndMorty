import { useState } from 'react'
import validation from './validation'
import style from './Form.module.css'

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
        <div className={style.cont}>
            <div className={style.action}>
                <form className={style.formCont} onSubmit={handleSubmit}>
                    <label htmlFor='email'>
                        Email:
                        <input className={style.inp} type='text'
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
                        <input className={style.inp} type='text'
                            placeholder='Ingresa una contraseña'
                            id='password'
                            name='password'
                            value={userData.password}
                            onChange={handleChange}
                        />
                        
                    </label>
                    { errors.password && <p>{errors.password}</p> }
                    <br/>
                    <button className={style.buttonForm}>Submit</button>
                    <h3 className={style.font}>Invitado solo click en el boton</h3>
                </form>
            </div>
            <hr className={style.hr} />
        </div>
    )
}

export default Form
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
                    <label className={style.label} htmlFor='email'>
                        <h1>Email:</h1>
                        <input className={style.inp} type='text'
                            placeholder='Your email'
                            id='email'
                            name='email'
                            value={userData.email}
                            onChange={handleChange}
                        />
                        
                    </label>
                    {errors.email && <p className={style.pa}>{errors.email}</p>}

                    
                    <label className={style.label2}  htmlFor='password'>
                    <h1>Password:</h1>
                        <input className={style.inp} type='text'
                            placeholder='Your password'
                            id='password'
                            name='password'
                            value={userData.password}
                            onChange={handleChange}
                        />
                        
                    </label>
                    { errors.password && <p className={style.pa}>{errors.password}</p> }
                    
                    <h3 className={style.guest1} >Guest!!:</h3>
                    <h3 className={style.font}>just enter an "a" on both fields</h3>
                   
                    <button className={style.buttonForm}>Submit</button>
                </form>
            </div>
            <hr className={style.hr} />
        </div>
    )
}

export default Form
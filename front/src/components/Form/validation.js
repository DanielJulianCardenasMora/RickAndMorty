



const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const expresionRegular = /^(?=.{1,35}$).+/
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/





function validation(data) {
    const errors = {}
    if (!regexEmail.test(data.email)) errors.email = 'Debe ser un email'
    if (!expresionRegular.test(data.email)) errors.email = 'Debe ser de 1 a 35 caracteres'
    if (!regexPassword.test(data.password)) errors.password = 'Debe contener un numero y ser de 6 a 10 caracteres '
    return errors
}

export default validation
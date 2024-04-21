



const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const expresionRegular = /^(?=.{1,35}$).+/
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/





function validation(data) {
    const errors = {}
    if (!regexEmail.test(data.email)) errors.email = 'Should be an email'
    // if (!expresionRegular.test(data.email)) errors.email = 'Should have 1 to 35 characters'
    if (!regexPassword.test(data.password)) errors.password = 'Should have at least one number'
    return errors
}

export default validation
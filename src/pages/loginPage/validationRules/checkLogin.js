
const validateEmailPattern = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validate = (loginData) => {
    let errors = {};

    if (!loginData.username) {
        errors.username = "username is requried!"
    }
    if (!loginData.password) {
        errors.password = "password is requried!"
    }
    if (!validateEmailPattern(loginData.username)) {
        errors.username = "Bad email!"
    }

    return errors;
}

export default validate;

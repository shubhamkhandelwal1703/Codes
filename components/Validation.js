

const Validation = (value) => {
    let errors={};

    if(!value.name){
        errors.name="Name is required."
    }
    if(!value.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(value.email)){
        errors.email="Email is invalid."
    }
    if(!value.phone){
        errors.phone="Password is rquired."
    }else if(value.password.length !== 10){
        errors.phone="Password must be 10 digits"
    }
    if(!value.password){
        errors.password="Password is rquired."
    }else if(value.password.length !== 10){
        errors.password="Password must be 10 digits"
    }
    if(!value.Cpassword){
        errors.Cpassword="Password is rquired."
    }else if(value.password.length !== 10){
        errors.Cpassword="Password must be 10 digits"
    }
    return errors;
}

export default Validation;
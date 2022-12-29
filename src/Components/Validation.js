const Validation = data => {

    let errors = {}; 
    if(!data.name){
        errors.name = "Name is required"
    }
    if(!data.phone){
        errors.phone = "Phone Number is required"
    } else if (data.phone.length < 10){
        errors.phone = "Phone Number Must contain 10digits"
    }
    if(!data.email){
        errors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email is Invalid"
    }
  return (
    errors
  );
}

export default Validation 
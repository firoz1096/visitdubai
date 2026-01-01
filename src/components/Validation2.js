import React, {useState} from "react";


export default function Validation2() {

    const intialValues = {username:""};
    const [formValues, setFormValues] = useState(intialValues); 
    const [formErrors, setFormErrors] = useState({});

    
    const handleChange = (e) =>{
        console.log(e.target);
        const{name , value} = e.target;
        setFormValues({...formValues, [name]: value});
        //console.log(formValues);
    }
    
   

    const validate =(values)=>{
        const errors = {};
        
        if (!values.username){
            errors.username = "Username is required!";
        }  
        return errors;
    }



    const handleSubmit =(e) =>{
      e.preventDefault();
      setFormErrors(validate(formValues));
    
  }

  return (
    
<>

<div className="container">

  <form onSubmit={handleSubmit}>

    <h1>Login Form</h1>
    <div className="ui-divider"></div>
    <div className="ui-form">
      <div className="field">
        <label>Username</label>
        <input 
        type="text"    
        placeholder="Username" 

        name="username" 
        value={formValues.username}
        onChange={handleChange} 
        
        />
      </div>
      <p>{ formErrors.username}</p>

      <button className="fbtn">Submit</button>
    </div>
  </form>
</div>
</>


  )
}






import React, {useState} from 'react';


function Form() {
   const [smurf, setSmurf] = useState({name:"", age:"", height:""});   

   const handleInput = (event) => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
   }
   const handleSubmit = (event) => {
      event.preventDefault();

   }
   return(
     <div>
       <form onSubmit={handleSubmit}>
         <input type="text" name="name" onChange={handleInput} />
         <input type="text" name="age" onChange={handleInput} />
         <input type="text" name="height" onChange={handleInput} />
         <button type="submit">Add Smurf</button> 
       </form>
     </div>
   )
}

export default Form;
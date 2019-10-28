import React, {useState, useContext} from 'react';
import { SmurfContext } from '../context';

function Form() {
   const [smurf, setSmurf] = useState({name:"", age:"", height:""});   
   const smurfee = useContext(SmurfContext);
   const handleInput = (event) => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
   }
   const handleSubmit = (event) => {
      event.preventDefault();
      smurfee.addSmurf(smurf);
      setSmurf({name:"", age:"", height:""});
   }
   return(
     <div>
       <form onSubmit={handleSubmit}>
         <input type="text" name="name" value={smurf.name} onChange={handleInput} />
         <input type="text" name="age" value={smurf.age} onChange={handleInput} />
         <input type="text" name="height"  value={smurf.height} onChange={handleInput} />
         <button type="submit">Add Smurf</button> 
       </form>
     </div>
   )
}

export default Form;
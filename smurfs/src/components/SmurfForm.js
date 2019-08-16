import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions/index';

//try to find usestate forms
// forms with hooks
const SmurfForm = props => {

    const [smurf, setSmurf] = useState({})

    //this is not the right syntax for handle submit???

    const handleSubmit = event => {
        event.preventDefault();
        props.addSmurfs();
      }

    const handleChange = event => {
        this.setSmurf({ smurfs: event.target.value });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                onChange={handleChange}
                // onChange={e => setSmurf(e.target.value)} 
            />
             <input 
                type="text" 
                name="age" 
                onChange={handleChange} 
            />
             <input 
                type="text" 
                name="height" 
                onChange={handleChange} 
            />
            <button type="submit">Add a Smurf</button>
          </form>
        </div>
    )
}

export default connect({}, { addSmurfs })(SmurfForm);  




// const SmurfForm = props => {
//     return (
//         <div>
//             <form onSubmit={
//                 axios.post('http://localhost:3333/smurfs', {
//                     name:'Test',
//                     age: '78'
//                 })
//                 .then(response => {
//                     console.log(response);
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 })
//             }>
//                 <input
//                     onChange={(event)=>{
//                         setSmurfName(event.target.value);
//                         console.log(event.target.value);
//                         }
//                     }
//                     placeholder="name"
//                     value={smurfName}
//                     name="name"
//                 />
//                 <button type="submit" >
//                  {/* onClick={()=> props.buyItem(props.feature)} */}
//                     Add to the village
//                  </button>
//              </form>
           
//          </div>
//     )
// }

// export default SmurfForm

// const SmurfForm = props => {
//     return (
//         <div>
//             <form onSubmit={
//                 axios.post('http://localhost:3333/smurfs', {
//                     name:'Test',
//                     age: '78'
//                 })
//                 .then(function (response) {
//                     console.log(response);
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//             }>
//                 <input
//                     onChange={(event)=>{
//                         setSmurfName(event.target.value);
//                         console.log(event.target.value);
//                         }
//                     }
//                     placeholder="name"
//                     value={smurfName}
//                     name="name"
//                 />
//                 <input
//                     onChange={(event)=>{
//                         console.log(event);
//                         setSmurfAge(event.target.value);
//                         }
//                     }
//                     placeholder="age"
//                     value={smurfAge}
//                     name="age"
//                 />
//                 <button type="submit" >
//                 {/* onClick={()=> props.buyItem(props.feature)} */}
//                     Add to the village
//                 </button>
//             </form>
           
//         </div>
//     )
// }

// export default SmurfForm
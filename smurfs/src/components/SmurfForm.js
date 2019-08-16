import React from 'react'
import axios from 'axios';

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


export default class SmurfForm extends React.Component {
    state = {
        smurfs: '',
    }
  
    handleChange = event => {
      this.setState({ smurfs: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        smurfs: this.state.smurfs
      };
  
      axios.post(`http://localhost:3333/smurfs`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                name="name" 
                onChange={this.handleChange} 
            />
            <button type="submit">Add a Smurf</button>
          </form>
        </div>
      )
    }
  }

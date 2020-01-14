import React, { useEffect} from "react";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
import Form from './Form';
import S from 'styled-components';


import { getSmurfs, deleteSmurfs} from '../actions';

const App = (props) => {
  
  
  useEffect(() => {
    const showSmurfs = async () => {
        axios.get('http://localhost:3333/smurfs')
        .then(response =>  {
            console.log(response.data[0].name);
            props.getSmurfs(response.data)
        })
        .catch(error => console.log(error));
    }
    showSmurfs();
}, [])
  
     const smurfs = props.smurfs;

     const deleteSmurf = (id) =>{
      axios.delete(`http://localhost:3333/smurfs/${id}`).then(res=>{
          props.deleteSmurfs(res.data)
      })
  }

    return (

      <div className="App">

        <HMayor>!!!SMURFS!!</HMayor>

        {smurfs.map((each) => 
        <Card>
        <H1>{each.name} </H1> <H2>age: {each.age}</H2>  <H2>height: {each.height}</H2>
         <Button onClick={()=>{deleteSmurf(each.id)}} > Delete Smurf</Button>
        </Card>
        )}

        <Form/>
        



      </div>
  
  );
  }



  export default connect(
    state => { 
    return { smurfs : state.smurfs };
  }, 
      { getSmurfs : getSmurfs, deleteSmurfs : deleteSmurfs } 
  )(App);



  const Card = S.div`
     width: 800px;
     height: 50px;
     border-radius: 5px;
     margin: 0 auto;
     margin-top: 30px;
     margin-bottom: 30px;
     background: lightgrey;
     display: flex;
     align-items: center;
     justify-content: space-around;
     padding: 10px;
`


  const Button = S.button`

  border: 1px solid red;
  background: orange;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  margin-left: 10px;
  font-weight: 600;
`


const HMayor = S.div`
font-size: 3rem;
font-weight: 700;
padding-top: 30px;

`

const H1 = S.div`
font-size: 1.5rem;
font-weight: 600;

`


const H2 = S.div`
font-size: 1rem;
font-weight: 500;

`

import React from 'react';
import {connect} from 'react-redux';
import {postSmurf, getSmurf} from '../actions/';

class SmurfForm extends React.Component {

    state= {
    
        name: "",
        age: "",
        height: ""
        
    }

    handleChanges = e =>{

        this.setState({name: e.target.value, age: e.target.value, height: e.target.value})
    }

    render(){

    return (
        <React.Fragment> 
        <form>
            <label>
              Name:
                <input 
                type= "text"
                value={this.state.name}
                onchange={this.handleChanges}
                placeholder="Name Here"
                />
            </label>
            <label>
              Age:
              <input 
               type= "text"
               value={this.state.age}
               onchange={this.handleChanges}
               placeholder="Age Here"
               />
          </label>
          <label>
              Height:
              <input 
               type= "text"
               value={this.state.height}
               onchange={this.handleChanges}
               placeholder="Height Here"/>
          </label>
          <button onClick={e => {e.preventDefault()
        this.props.postSmurf(this.state)}} >Submit</button>
        </form>

            {this.props.smurf.map((s, i) => (
               <h4 key={i}>
                  Name:  {s.name} | Age: {s.age} | Height: {s.height}
                   </h4> 
            ))}
        </React.Fragment>
    )
    }
}


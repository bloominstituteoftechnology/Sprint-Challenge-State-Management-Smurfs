import React from 'react';
import {connect} from 'react-redux';
import {postSmurf, getSmurf} from '../actions/';

class SmurfForm extends React.Component {

    state= {
    
        name: "",
        age: "",
        height: ""
        
    }

    handleNameChanges = e =>{

        this.setState({name: e.target.value})
    }

    
    handleAgeChanges = e =>{

        this.setState({ age: e.target.value})
    }

    
    handleHeightChanges = e =>{

        this.setState({height: e.target.value})
    }

    render(){

    return (
        <React.Fragment> 
            <button  onClick={() => document.getElementById('smurfForm').style.display='block'}>Add Smurf</button>
            

            <div id="smurfForm" className="w3-modal">
        <form className="w3-modal-content">
            <label>
              Name:
                <input 
                type= "text"
                value={this.state.name}
                onChange={this.handleNameChanges}
                placeholder="Name Here"
                />
            </label>
            <label>
              Age:
              <input 
               type= "text"
               value={this.state.age}
               onChange={this.handleAgeChanges}
               placeholder="Age Here"
               />
          </label>
          <label>
              Height:
              <input 
               type= "text"
               value={this.state.height}
               onChange={this.handleHeightChanges}
               placeholder="Height Here"/>
          </label>
          <button className="w3-blue" onClick={e => {e.preventDefault()
        this.props.postSmurf(this.state)}} >Submit</button>
      
        </form>
        </div>
          <div className="w3-button w3-block" onClick={() => document.getElementById('list').style.display='block'} >List</div>
         <article id="list"> 
        
            {this.props.smurf.map((s, i) => (
              <h4 key={i}>
                 <p> Name:  {s.name} | Age: {s.age} | Height: {s.height} </p>
                   </h4>
            ))}

            <div className="">{this.props.getSmurf()}</div>
</article>



            

        </React.Fragment>
    )
    }
}

const mapStateToProps = state => {

    return {

        smurf: state.smurf

    }
}

export default connect(
    mapStateToProps,
    {postSmurf, getSmurf}
)(SmurfForm)
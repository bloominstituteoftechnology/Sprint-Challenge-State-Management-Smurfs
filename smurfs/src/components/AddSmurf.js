import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSmurfs } from '../actions/postActions';

class AddSmurf extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: '',
                age: '',
                height: '',
                id: new Date()
        };
    }

    onChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState(addSmurfs)
        // const post = {
        //     name: this.state.name,
        //     age: this.state.age,
        //     height: this.state.height,
        //     id: this.state.id
        // };
        // this.props.addSmurfs(post);
    }
         

    render() {

        return (
            <div>
                <hi>Add Smurf</hi>
                  <form onSubmit={onSubmit}>
                      <div>
                          <label>Name:</label><br />
                          <input
                             type='text'
                             name='name'
                             value={this.state.name}
                             onChange={this.onChange}
                            /><br />
                           <input 
                             type='text'
                             age='age'
                             value={this.state.age}
                             onChange={this.onChange}
                            /><br />
                            <input 
                             type='text'
                             height='height'
                             value={this.state.height}
                             onChange={onChange}  
                            /><br />    
                           <button type='submit'>Submit</button>                    
                      </div>
                  </form>
            </div>
        )
    }
}

export default  connect(null, { addSmurfs })(AddSmurf);
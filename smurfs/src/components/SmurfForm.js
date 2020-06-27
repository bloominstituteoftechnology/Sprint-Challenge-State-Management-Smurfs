import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/addSmurf';

console.log('addSmurf AC', addSmurf)

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 1,
      height: 1
    }
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSmurf({ 
      id: this.props.state.smurfs.length + 1,
      name: this.state.name, 
      age: this.state.age,
      height: this.state.height 
    })
    this.setState({ name: '', age: 1, height: 1 })
  }

  render() {
    console.log('state, props', this.state, this.props)
    return (
      <div>
          <h3>Add a Smurf! </h3>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input 
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Age (years)
          <input 
            type='text'
            name='age'
            placeholder='age'
            value={this.state.age}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Height (cm)
          <input 
            type='text'
            name='height'
            placeholder='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </label>

        <button type='submit'>Add Smurf</button>
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)
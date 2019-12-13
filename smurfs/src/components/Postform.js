import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
      const post = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add A Smurf</h1>
        <form onSubmit={this.onSubmit}>
          <div>            
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.title}
              placeholder="Name"
            />
          </div>          
          <div>           
            
            <input
              name="age"
              onChange={this.onChange}
              value={this.state.age}
              placeholder="Age"
            />
          </div>

          <div>
          <input
              type="text"
              name="height"
              onChange={this.onChange}
              value={this.state.height}
              placeholder="Height"
            />
            </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
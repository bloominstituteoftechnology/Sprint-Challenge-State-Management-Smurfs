import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            height: ''
            // id: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
        // this.setState({ id: Date.now() })
    }

    sumbitHandler = e => {
        // console.log(this.state)
        axios
            .post('http://localhost:3333/smurfs', this.state)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        const { name, age, height } = this.state
        return (
            <div>
                <form className='add-form' onSubmit={this.sumbitHandler} >
                    <input
                        placeholder='Name'
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.changeHandler} />
                    <input
                        placeholder='Age'
                        type='text'
                        name='age'
                        value={age}
                        onChange={this.changeHandler} />
                    <input
                        placeholder='Height'
                        type='text'
                        name='height'
                        value={height}
                        onChange={this.changeHandler} />
                    <button className='add-btn' >Create Smurf</button>
                </form>
            </div>
        )
    }
}

export default PostForm;
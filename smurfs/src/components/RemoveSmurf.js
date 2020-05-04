import React, { Component } from 'react'
import axios from 'axios'

class RemoveSmurf extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    sumbitHandler = e => {
        console.log(this.state)
        axios
            .delete(`http://localhost:3333/smurfs/${this.state.id}`)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        // console.log(this.state)
        return (
            <form onSubmit={this.sumbitHandler} >
                <button>Remove</button>
            </form>
        )
    }
}

export default RemoveSmurf;
import React from 'react'
import axios from 'axios'
// import { useContext } from 'react'
// import { SmurfContext } from '../contexts/SmurfContext.js'

export default class MainForm extends React.Component {
    constructor(){
        super();
        this.state={ name:"", age: null, height:"" }
    }

    // const [newsmurf, setNewsmurf] = useState({ name:"", age: null, height:"" });

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        const newSmurf = {
            name:this.state.name,
            age:Number(this.state.age),
            height: this.state.height,
        }
        
        console.log(newSmurf)
        // console.log("in onSubmit", newsmurf.name)

        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
            //    response.data 
               console.log(response.data)
            })
            .catch (err => {
                console.log("error in post", err)
            })
            window.location.reload()
    }


    render() {
        return(
            <div>
                <h1>Welcome to Smurf Village!</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="name"
                        placeholder="enter Smurf name"
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.changeHandler}
                    />
                    <input
                        className="age"
                        placeholder="enter Smurf age"
                        type="number"
                        value={this.state.age}
                        name="age"
                        onChange={this.changeHandler}
                    />
                    <input
                        className="height"
                        placeholder="enter Smurf height in cm."
                        type="text"
                        value={this.state.height}
                        name="height"
                        onChange={this.changeHandler}
                    />
                    <button type="submit" className="SubmitButton">Join!</button>
                </form>
            </div>
        )
    }
}


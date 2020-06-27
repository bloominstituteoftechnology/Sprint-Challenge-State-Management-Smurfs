import React from 'react'
import { connect } from 'react-redux'
import { _get, _post } from '../action/action'

// class component for fun

// will also provide a commented out functional component if I have time after finishing stretch~~~

class Smurfs extends React.Component {
    state = {
        name: "",
        age: "",
        height: ""
    }

    handleName = e => {
        this.setState({name: e.target.value})
    }

    handleAge = e => {
        this.setState({age: e.target.value})
    }

    handleHeight = e => {
        this.setState({height: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props._post(this.state)
    }

    render() {
        return (
            <div>
                <div id="form">
                    <form>
                        <label>Name:
                            <input type="text" value={this.state.name} onChange={this.handleName} placeholder="Name"/>
                        </label>
                        <br/>
                        <label>Age:
                            <input type="text" value={this.state.age} onChange={this.handleAge} placeholder="Age"/>
                        </label>
                        <br/>
                        <label>Height:
                            <input type="text" value={this.state.height} onChange={this.handleHeight} placeholder="Height"/>
                        </label>
                        <br/>
                        <br/>
                        <button onClick={this.handleSubmit}>Add Smurf</button>   
                    </form>
                </div>
                <br />
                <hr />
                <br />
                <button onClick={() => document.getElementById('smurfs').style.display='block'}>View Smurfs</button>
                    <div id='smurfs'>
                        {this.props.smurfs.map((v, k) => (
                            <div key={k}>
                                <p>
                                    <strong>Name: {v.name}</strong>
                                </p>
                                <p>
                                    <strong>Age: {v.age}</strong>
                                </p>
                                <p>
                                    <strong>Height: {v.height}</strong>
                                </p>
                            </div>
                        ))}
                        <div>
                            {this.props._get()}
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { _post, _get })(Smurfs)

/*

export default function Form(props) {

}

*/
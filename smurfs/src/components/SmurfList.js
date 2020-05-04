import React from 'react';
import axios from 'axios';
import SmurfPerson from './SmurfPerson';

export default class SmurfList extends React.Component {
    state = {
        smurfs: []
    }
    componentDidMount() {
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                this.setState({ smurfs: res.data});
            })
            .catch(err => {
                console.log ({ err })
            })
    };

    

    render() {
        console.log(this.state.smurfs);
        return (
            <div className = "smurfListing">
                <div>
                {this.state.smurfs.map(smurf => {
                    return(<SmurfPerson smurf={smurf} />)
                })}
                </div>
            
            </div>
        );
    }
}
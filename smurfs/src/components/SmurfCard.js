import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {getSmurfs} from '../store/actions';

class SmurfCard extends React.Component {
    constructor(props){
        super(props)
        console.log('smurf construtor', props)
        this.state = {
            smurfsAdd: []
        };
    }

    //component did Mount
    componentDidMount(){
    console.log(this.props)
    console.log('first render')
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState ({smurfsAdd: res.data}))
    console.log('comp did mount')
}

    //component did update
    componentDidUpdate(prevProps) {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState ({smurfsAdd: res.data}))
    console.log('comp did update')

}

if(fetchingSmurfs){
    return<h2>Fetching your smurfs, hold on...</h2>
}

render() {
    console.log('state', this.state)
    return(

        <div>
            <h1>SMURF</h1>


            {this.state.smurfsAdd.map(smurf => {
                return(
                    <div className='smurfcard'>
                        <h3 className='text'>Name: {smurf.name}</h3>
                        <h3 className='text'>AGE: {smurf.age}  </h3>
                        <h3 className='text'>HEIGHT: {smurf.height} </h3>
                    </div>  
                )
            })}


        </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfCard)

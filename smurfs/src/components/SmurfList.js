import React from 'react';
import { connect } from 'react-redux';

//import axios from 'axios';

import SmurfPerson from './SmurfPerson';

class SmurfList extends React.Component {
    // state = {
    //     smurfs: []
    // }
    // componentDidMount() {
    //     axios.get('http://localhost:3333/smurfs')
    //         .then(res => {
    //             this.setState({ smurfs: res.data});
    //         })
    //         .catch(err => {
    //             console.log ({ err })
    //         })
    // };

    

    render (props) {
        //console.log(props);
        //why can't I get props here?
        return (
            <div className = "smurfListing">
                
                {this.state.smurfs.map(smurf => {
                    return(
                    <SmurfPerson smurf={smurf} />
                    )
                })}
                
            
            </div>
        );
    }
};

const mapStateToProps = state => {
    return{
        /**returns an object of state */
    }
}

export default connect(mapStateToProps, {})(SmurfList);
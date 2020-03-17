import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'



const  CardList = (props) => {
    console.log('object')
    return (
        <div>
	    {props.smurfs.map((item, index) => (
                <Card key={index} smurf={item} index={index} />
            ))}
        </div>
                
                )}



    function mapStateToProps(state) {
        return {
            
            smurfs: state.smurfReducer.smurf,
            
        };
    }

export default connect(mapStateToProps)(CardList)
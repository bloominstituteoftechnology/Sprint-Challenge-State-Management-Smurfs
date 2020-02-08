import React from 'react';
import  { connect } from 'react-redux';

const SmurfsList = props => {
    console.log( "props in smurfslist", props.smurfs)
    return <>
        { props.error ? (
        <div className="error">{props.error}</div>
        ) :( 
            props.smurfs.map(item =>(
                <div>
                    {item.name}
                </div>
            )
        ))}
    </>
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs, error : state.error
    };
};

export default connect(mapStateToProps, {}) (SmurfsList)
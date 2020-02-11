import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';

const SmurfForm = props => {

    

        useEffect(()=>{
            props.getData();
        },[])

        
    

    return (
        <div>
            {!props.isFetchingData ?(
                <div>we are fetching data</div>
                ) : (
                <button >get data</button>
                )}            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(SmurfForm);
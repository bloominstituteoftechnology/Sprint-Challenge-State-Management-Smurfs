import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios'

//components
import Smurf from './Smurf'

//actions
import {

    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    getSmurfData
    
} from '../store/actions'

// redux stuff
import { useDispatch, useSelector} from 'react-redux'

const GridContainer = () => {
    const dispatch = useDispatch()
    const smurfs = useSelector(state => state.smurfs)

    useEffect(() => {

        dispatch({ type: FETCH_DATA_START })

        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response)
            // dispatch({ type: FETCH_DATA_FAIL })
        })
    },[])



    return (

        <Grid>
            <Grid.Row columns={2}>

                <Grid.Column width={6}>
                    <h1> FORM WILL GO HERE!!</h1>
                </Grid.Column>

                <Grid.Column width={10}>
                    
                    {smurfs.map(sm => <Smurf sm={sm} key={sm.id}/>)}

                </Grid.Column>

            </Grid.Row>
        </Grid>

    );
};

export default GridContainer;
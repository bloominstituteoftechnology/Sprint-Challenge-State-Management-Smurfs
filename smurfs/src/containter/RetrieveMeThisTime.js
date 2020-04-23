import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchInfo, pushInfo } from '../actions';
import AddSmurfForm from './AddSmurfForm';
// import { addReducer, initialState } from '../reducers';
// import Axios from 'axios';

const RetrieveMeThisTime = (props) => {
    useEffect(() => {
        props.fetchInfo();
    }, []);
    // const [state, dispatch] = useReducer(addReducer, initialState);

    // console.log(props);

    console.log('RetMe Props: ', props);

    return (
        <div>
            <h3>
                These are the smurfs of the village. Can we make them grow in
                size, not physically but in numbers????
            </h3>
            <AddSmurfForm
                props={props}
                // submitForm={submitForm}
            />
            {props.isFetching && (
                <Loader type="Circles" color="#00BFFF" height={60} width={80} />
            )}
            {props.info.map((value, i) => {
                // console.log(`This is smurf #${i} in props.map`, value);
                return (
                    <section key={i}>
                        <h3>Hey there, {value.name} lives in smurf village.</h3>
                        <div>
                            <h5>Coming in at {value.height},</h5>
                            <h5>This smurf is {value.age} years old!</h5>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    // console.log('mapStateToProps state: ', state);
    return {
        info: state.info.info,
        isFetching: state.info.isFetching,
        error: state.info.error,
    };
};
export default connect(mapStateToProps, { fetchInfo, pushInfo })(
    RetrieveMeThisTime
);

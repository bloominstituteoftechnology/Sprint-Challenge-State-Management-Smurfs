import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchInfo } from '../actions';

const RetrieveMeThisTime = (props) => {
    useEffect(() => {
        props.fetchInfo();
    }, []);
    console.log('RetMe Props: ', props.info);
    return (
        <div>
            <h3>
                These are the smurfs of the village. Can we make them grow in
                size, not physically but in nubmers????
            </h3>
            {props.info &&
                props.info.map((value) => {
                    console.log(value);
                    return (
                        <section>
                            <h3>
                                Hey there, {value.name} lives in smurf village.
                            </h3>
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
    console.log('mapStateToProps state: ', state);
    return {
        info: state.info.info,
        isFetching: state.info.isFetching,
        error: state.info.error,
    };
};
export default connect(mapStateToProps, { fetchInfo })(RetrieveMeThisTime);

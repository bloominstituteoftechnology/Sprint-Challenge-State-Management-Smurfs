import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../store/actions';


class SmurfList extends React.Component {







 
}

const mapStateToProps = state => {
    return{
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id
    };
};

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfList);


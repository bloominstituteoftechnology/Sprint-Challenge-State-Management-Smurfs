import React from 'react';
import Axios from 'axios';
import { connect} from 'react-redux';
import {getSmurfs} from '../../actions';
import SmurfCard from './smurfCard';

import styled from "styled-components";

const CardListStyles = styled.div`
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    width: 750px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 100%;
    padding: 20px, 0px;
`;


const SmurfList = props => {

    return (
<CardListStyles>


</CardListStyles>
    )
}

const mapStateToProps = state => {
    return {
        isloading: state.isloading,
        error: state.error,
        data: state.data
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);
import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getSmurfs } from './../../actions/smurfs'
import styled from 'styled-components';

import SmurfCard from './SmurfCard';


 class SmurfList extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getSmurfs()
    }
    render() {
        return (
            <CardListStyles>
                {
                    this.props.smurfs.data ?
                    this.props.smurfs.data.map((smurf, i )=>{
                         return <SmurfCard smurf ={smurf} key={i}/>
                        } )
                         :
                    null
                }
                
            </CardListStyles>
        )
    }
}

const mapStateToProps = state =>{
    return{
       smurfs: state.reducer
    }
}

export default connect(mapStateToProps, {
    getSmurfs
})(SmurfList);

const CardListStyles = styled.div`
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    width: 750px;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    padding: 20px, 0px;


`;
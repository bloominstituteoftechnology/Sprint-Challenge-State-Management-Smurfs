import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Smurfed = styled.div`
	align-items: center;
	border-bottom: 1px solid rgb(221, 221, 221);
	height: 200px;
	justify-content: space-between;
	padding: 0 3%;
	width: 30%;
	-webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	-moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
	text-align: center;
    margin: auto;
	background-color: #FFFF6F;
    border-radius: 20px;
    display: flex;
	
`;

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
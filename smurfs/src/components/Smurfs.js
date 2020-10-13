import React, {useEffect} from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {fetchSmurfs} from "../actions";

const Smurfed = styled.div`
	align-items: center;
	text-align: center;
    display: flex;
    flex-wrap: wrap;
  `;



const  Smurfs = (props) => {
 useEffect(() => {
     props.fetchSmurfs()
 }, [])
    return (
        <Smurfed>
	    {props.smurf.map((smurf) => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </Smurfed>
                
                )}



    function mapStateToProps(state) {
        return {
            smurf: state.smurf,
        };

    }
    const mapDispatchToProps = {
    fetchSmurfs
    }

export default connect(mapStateToProps,mapDispatchToProps)(Smurfs)
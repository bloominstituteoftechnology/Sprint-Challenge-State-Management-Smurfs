import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/smurfActions';
import Smurf from './Smurf';
import styled from 'styled-components';
	
	const AllSmurfs = styled.div`
	 margin: 2%
    `

const Smurfs = ({ getSmurfs, smurfs }) => {
	// console.log("smurfs in Smurfs:", smurfs); //test
	useEffect(()=>{
		getSmurfs();
	}, [getSmurfs]);
	
	return (
		<AllSmurfs>
			{smurfs.map(smurf => (
				<Smurf key={smurf.id} smurf={smurf} />
			))}
		</AllSmurfs>
	)
};

const mapStateToProps = state => {
	// console.log('smurfs: ', state)  //test
   return { smurfs: state.smurfs, };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	}
});

export default function Smurfs() {
	//useDispatch give dispatch function in redux store
	const dispatch = useDispatch();
	const styles = useStyles();

	useEffect(
		() => {
			dispatch(fetchSmurfs());
		},
		[ dispatch ]
	);

	const smurfs = useSelector((state) => state.smurfs);

	return <div className={styles.root}>{smurfs.map((smurf) => <Smurf key={smurf.id} {...smurf} />)}</div>;
}

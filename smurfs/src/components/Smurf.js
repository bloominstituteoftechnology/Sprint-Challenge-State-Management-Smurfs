import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { moveSmurfOut } from '../actions';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		margin: '1rem',
		border: 'thin solid #f50057;',
		backgroundColor: '#e0f4ff',
		padding: '0 10px 15px 10px',
		width: '30%',
		textAlign: 'center',
		borderRadius: '8px',
		opacity: '0.9'
	},
	n: {
		color: 'tomato',
		fontSize: '1.5em',
		textShadow: '1px 1px 0px black',
		marginBottom: '5px'
	},
	a: {
		padding: '2px',
		color: 'gray',
		textShadow: '1px 1px 0px black'
	}
};

function Smurf(props) {
	const dispatch = useDispatch();

	return (
		<div className={props.classes.root}>
			<dl>
				<p className={props.classes.n}>I'm {props.name}!</p>
				<p className={props.classes.a}>
					I'm {props.age} year-old and {props.height} tall
				</p>
			</dl>
			<Button
				className="delete-smurf"
				variant="contained"
				size="small"
				color="secondary"
				onClick={() => {
					dispatch(moveSmurfOut(props.id));
				}}
			>
				Move Out
			</Button>
		</div>
	);
}

export default withStyles(styles)(Smurf);

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSmurf } from "../actions";
import { Button, Input, Form } from 'reactstrap';

const Post = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState({
		name: "",
		age: "",
		height: "",
	});

	const handleChanges = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	return (
		
			<Form className='form'
				onSubmit={e => {
					e.preventDefault();
					dispatch(addSmurf(data));
					setData({ name: "", age: "", height: "", id: Date.now() });
				}}>
				<Input type="text" name="name" placeholder="Smurf Name" onChange={handleChanges}  />
				<br />
				<Input type="text" name="age" placeholder="Age" onChange={handleChanges} />
				<br />
				<Input type="text" name="height" placeholder="Height" onChange={handleChanges} />
				<br />
				<Button color='info'>Add Smurf</Button>
			</Form>
		
	);
};

export default Post;

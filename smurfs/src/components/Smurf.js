import React from 'react';
import { useDispatch } from 'react-redux';

import { moveSmurfOut } from '../actions';

export default function Smurf(props) {
    const dispatch = useDispatch();

    return (
        <div className={`smurf smurf-${props.id}`}>
            <dl>
                <dt>Name</dt>
                <dd>{props.name}</dd>
                <dt>Age</dt>
                <dd>{props.age}</dd>
                <dt>Height</dt>
                <dd>{props.height}</dd>
            </dl>
            <button className="delete-smurf" onClick={() => {
                dispatch(moveSmurfOut(props.id));
            }}>Move Out</button>
        </div>
    )
}
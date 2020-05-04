import React from 'react';

export default function Smurf(props) {
    return (
        <div className={`smurf-${props.id}`}>
            <dl>
                <dt>Name</dt>
                <dd>{props.name}</dd>
                <dt>Age</dt>
                <dd>{props.age}</dd>
                <dt>Height</dt>
                <dd>{props.height}</dd>
            </dl>
        </div>
    )
}
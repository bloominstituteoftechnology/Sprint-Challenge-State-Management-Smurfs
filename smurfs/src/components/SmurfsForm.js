import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'

const SmurfsForm = props => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')

    const handleChangesName = e => {
        e.preventDefault();
        setName(e.target.value);
    }


    const handleChangesAge = e => {
        e.preventDefault();
        setAge(e.target.value);
    }

    const handleChangesHeight = e => {
        e.preventDefault();
        setHeight(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(name, age, height);
        setName('')
        setHeight('')
        setAge('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <form>
                    Name<input
                        className="title-input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChangesName}
                    />
                </form>
                <form>
                    Age<input
                        className="title-input"
                        type="text"
                        name="age"
                        value={age}
                        onChange={handleChangesAge}
                    />
                </form>
                <form>
                    Height<input
                        className="title-input"
                        type="text"
                        name="height"
                        value={height}
                        onChange={handleChangesHeight}
                    />
                </form>
                <button>
                    Add New Smurfs
              </button>
            </form>
        </div>
    )
}

// export default SmurfsForm

const mapStateToProps = state => {
    return {
    };
};

export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfsForm);
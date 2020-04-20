import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addSmurfAsync } from '../redux/actionCreators';

const Form = ({ addSmurfAsync }) => {
    const { handleSubmit, register, errors } = useForm({ mode: 'onblur' });
    const onSubmit = (values) => {
        const cleanData = ({ name, age, height }) => {
            try {
                return {
                    name,
                    height,
                    age: Number.parseInt(age),
                };
            } catch (e) {
                console.log(`Unfortunately, you've given us a bad age`);
            }
        };
        addSmurfAsync(cleanData(values));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Add Form</h3>
            <label htmlFor="name">
                <span>Name:</span>
            </label>
            <input
                id="name"
                name="name"
                ref={register({
                    required: 'Required',
                })}
            />
            {errors.name && errors.name.message}
            <label htmlFor="age">
                <span>Age:</span>
            </label>
            <input
                id="age"
                name="age"
                ref={register({
                    required: 'Required',
                })}
            />
            {errors.age && errors.age.message}

            <label htmlFor="height">
                <span>height</span>
            </label>
            <input
                id="height"
                name="height"
                ref={register({
                    required: 'Required',
                })}
            />
            {errors.height && errors.height.message}

            <button type="submit">Submit</button>
        </form>
    );
};

export default connect(null, { addSmurfAsync })(Form);

import { useState } from 'react';

export const useForm = cb => {
    const [fields, setFields] = useState({});

    const submit = e => {
        e.preventDefault();
        cb(fields);
        e.target.reset();
    }

    const handleChanges = e => {
        e.preventDefault();
        setFields({ ...fields, [e.target.name]: e.target.value });
    }

    return {
        handleChanges,
        submit,
        fields
    }
}
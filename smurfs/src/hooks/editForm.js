import {useState} from "react";
import {get_smurfs, put_smurf, send_smurf} from "../actions";
import React from 'react';

const initial = {
    name:'',
    age:0,
    height:'',
    id: 0
};

export const useFormEdit = (props) =>{
    const [valuesEdit, setValuesEdit] = useState(initial);

    const handleChangesEdit = (e) =>{
        console.log('in handle change')
        console.log('state in useform is ', valuesEdit)
        setValuesEdit({ ...valuesEdit, [e.target.name]:e.target.value});

    };

    const handleSubmitEdit = (smurf) =>{

        console.log('props are ', send_smurf)
        console.log('handle submitEdit');
        console.log('values before submit are ', valuesEdit)
        put_smurf({name:valuesEdit.name, age:parseInt(valuesEdit.age), height: valuesEdit.height, id:smurf.id});
        get_smurfs();
    };

    return[handleSubmitEdit, valuesEdit, setValuesEdit, handleChangesEdit]
}

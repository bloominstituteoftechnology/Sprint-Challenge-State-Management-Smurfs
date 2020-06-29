import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { useForm } from "../hooks/useForm";
import {useFormEdit} from "../hooks/editForm";

import {get_smurfs, inquire, send_smurf} from "../actions";

const Smurfer = props =>{

    const [ handleChanges, values, handleSubmit] = useForm();
    const [handleSubmitEdit, valuesEdit, setValuesEdit, handleChangesEdit] = useFormEdit();
    const [edit, setEdit] = useState({ready:false, id:''});

    useEffect(()=>{
        props.get_smurfs();
    },[]);

    return(
        <>
            <>
                {props.names.map(item=>{
                    return(
                        <>
                        <p key={item.id}>{item.name}</p>
                            {edit && `${item.id}` === edit.id ?
                                <form onSubmit={handleSubmitEdit(item)} >
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder={item.name}
                                onChange={handleChangesEdit}
                                />

                                    <input
                                        type='text'
                                        id='age'
                                        name='age'
                                        placeholder={item.age}
                                        onChange={handleChangesEdit}
                                    />

                                    <input
                                        type='text'
                                        id='height'
                                        name='height'
                                        placeholder={item.height}
                                        onChange={handleChangesEdit}
                                    />

                                    <button type="submit">save</button>

                                </form>
                                :
                                null

                            }
                        <button key={item.id} onClick={()=>setEdit({ready:true, id:`${item.id}`})}>edit</button>
                        </>
                    )
                })}
                </>

            <form onSubmit={handleSubmit} >
                <h2>Add Smurf to village</h2>
                <label htmlFor="name">
                    Name:
                    <input
                        id='name'
                        name='name'
                        value={values.name}
                        onChange={handleChanges}
                        />
                </label>

                <label htmlFor="age">
                    Age:
                    <input
                        id='age'
                        name='age'
                        value={values.age}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="height">
                    Height:
                    <input
                        id='height'
                        name='height'
                        value={values.height}
                        onChange={handleChanges}
                    />
                </label>


                <button type='submit'>submit</button>
            </form>
            <button onClick={()=>{props.inquire()}}>grablist</button>
            <button onClick={()=>{props.send_smurf({name:'daniel', age:342, height:'10cm'})}}>send smurf</button>
            </>
    )
}

const mapStateToProps = state =>({
    names: state.smurfs
});

export default connect(
    mapStateToProps,
    {get_smurfs, inquire, send_smurf})(Smurfer,useForm);
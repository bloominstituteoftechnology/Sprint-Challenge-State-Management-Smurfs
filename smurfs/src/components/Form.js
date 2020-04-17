import React from 'react';

export default function Form(props) {
    return (
      <div className="form">
        <form onSubmit={props.onSubmit}>

            <label>Name
            <input  
                onChange={props.onInputChange}
                value= {props.formValue.name}
                name='name' 
                placeholder='Name: ' 
            />
            </label>
            <br/>
            <label>Age
            <input  
                onChange={props.onInputChange}
                value= {props.formValue.age}
                name='age' 
                placeholder='Age: ' 
            />
            </label>
            <br/>
            <label>Height
            <input  
                onChange={props.onInputChange}
                value= {props.formValue.height}
                name='height' 
                placeholder='height: ' 
            />
            </label>
            <br/>

            <input type='submit'/>

        </form>
      </div>
    );
  };

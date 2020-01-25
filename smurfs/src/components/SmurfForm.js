import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs, fetchSmurfs } from "../actions/index";
import { useForm } from "react-hook-form";

const SmurfForm = props => {
  const { register, handleSubmit } = useForm();

  const submitForm = data => {
    //Prevent the page from reloading
    //Call your action with the data from the form passed in
    console.log(data);
    props.postSmurfs(data); //Add new smurf
    setTimeout(() => {
      props.fetchSmurfs();
    }, 1000); //When you're done, show me all smurfs
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input type="text" placeholder="name" name="name" ref={register} />

      <input type="number" placeholder="age" name="age" ref={register} />

      <input type="text" placeholder="height" name="height" ref={register} />

      <button type="submit"> Add smurf </button>
    </form>
  );
};
const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps, { postSmurfs, fetchSmurfs })(SmurfForm);

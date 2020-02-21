import React, { useContext } from "react";
import { formcontext } from "../context/smurformcontext";

export default function SmurfForm() {
  const formContext = useContext(formcontext);

  return (
    <div>
      <form onSubmit={formContext.onSubmit}>
        <label>
          Name:
          <input
            value={formContext.form.name}
            onChange={formContext.onChange}
            name='name'
          />
        </label>
        <br />
        <label>
          Age :
          <input
            value={formContext.form.age}
            onChange={formContext.onChange}
            name='age'
          />
        </label>
        <br />
        <label>
          Heigth :
          <input
            value={formContext.form.height}
            onChange={formContext.onChange}
            name='height'
          />
        </label>
        <br />

        <input type='submit' />
      </form>
    </div>
  );
}

import React, {useState } from "react";

const MainForm = () => {
    const [newsmurf, setNewsmurf] = useState();

    const changeHandler = (event) => {
        setNewsmurf({...newsmurf, [event.target.name]: event.target.value})
      }
    return(
        <div>
            <h1>Welcome to Smurf Village!</h1>
            <form>
                <input
                    className="name"
                    placeholder="enter Smurf name"
                    type="text"
                    value={newsmurf.name}
                    name="name"
                    onChange={changeHandler}
                />
                <input
                    className="age"
                    placeholder="enter Smurf age"
                    type="number"
                    value={newsmurf.age}
                    name="age"
                    onChange={changeHandler}
                />
                <input
                    className="height"
                    placeholder="enter Smurf height in cm."
                    type="text"
                    value={newsmurf.height}
                    name="height"
                    onChange={changeHandler}
                />
                <button type="submit" className="SubmitButton">Join!</button>
            </form>
        </div>
    )
}

export default MainForm;
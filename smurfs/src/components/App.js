import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getSmurfs } from './actions/getSmurfs';
import Smurf from './smurf';
import SmurfForm from './smurfForm';

const App = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSmurfs())
  }, [dispatch])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurf />
        <SmurfForm />
      </div>
    );
  
}

export default App;

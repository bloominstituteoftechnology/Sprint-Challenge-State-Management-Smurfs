import React from 'react';
//TO REMOVE- AXIOS HERE
import axios from 'axios';

const Smurf = ({ item }) => {
    //TO REMOVE CREATE REMOVESMURF FUNCTION WITH AN AXIOS.DELETE 
    const removeSmurf = id => {
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(response => {
                console.log('removing smurf', response)
            })
            .catch(function(error) {
                console.log(error);
            });
            window.location.href = window.location.href;
    };

    console.log('SMURFLIST', item);
    return (
        <>
            <h2>{item.name}</h2>
            {/* ADD BUTTON HERE WITH ONCLICK TO REMOVE SMURF WITH ITEM ID */}
            <button onClick={() => removeSmurf(item.id)}>Bye-Bye Smurf!</button>
        </>
    );
};

export default Smurf;
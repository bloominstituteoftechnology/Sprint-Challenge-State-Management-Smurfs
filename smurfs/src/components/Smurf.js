import React from 'react';
//TO REMOVE- AXIOS HERE
const Smurf = ({ item }) => {
    //TO REMOVE CREATE REMOVESMURF FUNCTION WITH AN AXIOS.DELETE 

    console.log('SMURFLIST', item);
    return (
        <>
            <h2>{item.name}</h2>
            {/* ADD BUTTON HERE WITH ONCLICK TO REMOVE SMURF WITH ITEM ID */}
        </>
    );
};

export default Smurf;
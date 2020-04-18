import React, {useContext} from "react";

import smurfList from "../contexts/smurflistcontext";

function SmurfVillage(){
    const smurfs = useContext(smurfList);

    return(
        <div>
            {smurfs.map(i => {
                return(
                    <div>
                        <h1>{i.name}</h1>
                        <h2>Age: {i.age}</h2>
                        <h2>Height: {i.height}</h2>
                        <h3>ID: {i.id}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default SmurfVillage;
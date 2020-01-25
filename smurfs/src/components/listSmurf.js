import React, { useContext } from "react";
import { smurfContext } from "../context/smurfContext";
import SmurfCard from "./smurfCard";

const ListSmurf = () => {
    const {smurf} = useContext(smurfContext);
    return (
        <div className = 'listing'>
            {smurf && smurf.map(smurf => <SmurfCard smurf={smurf} /> )}
        </div>
    );
};

export default ListSmurf;

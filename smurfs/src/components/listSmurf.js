import React, { useContext } from "react";
import { smurfContext } from "../context/smurfContext";
import SmurfCard from "./smurfCard";

const ListSmurf = () => {
    const {smurf} = useContext(smurfContext);
    return (
        <div className = 'listing'>
            {smurf && smurf.map(smurf => <SmurfCard key = {smurf.name} smurf={smurf} /> )} {/* smurf object matches, build array with props. Has a key. */}
        </div>
    );
};

export default ListSmurf;

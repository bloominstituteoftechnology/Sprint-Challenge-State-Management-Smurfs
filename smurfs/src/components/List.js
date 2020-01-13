import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import Card from "./Card";

function List() {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div className="List">
      {console.log(smurfs)}
      {smurfs.map(smurf => {
        return <Card key={smurf.id} smurf={smurf}></Card>;
      })}
    </div>
  );
}
export default List;

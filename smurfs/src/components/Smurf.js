import React from "react";

export default function(smurfz) {
  return (
    <ul>
      <div>Name: {smurfz.name}</div>
      <div>Age: {smurfz.age}</div>
      <div>Height: {smurfz.height}</div>
    </ul>
  );
}
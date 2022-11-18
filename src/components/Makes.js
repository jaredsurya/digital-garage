import React from "react";
import MakeCard from "./MakeCard";
import { Link } from "react-router-dom";

function Makes({makesModels, onSubmitEdits, onDelete}){
  return (
    <div>
      <h1>Explore vehicle makes and their models:</h1>
      {makesModels.map((make) => {
        return <MakeCard onSubmitEdits={onSubmitEdits} onDelete={onDelete} key={make.id} make={make}/>
      })}
      <Link className="toNew" to="/creator">Click here to generate a NEW make or model!</Link>
    </div>
    
  )
}
export default Makes;
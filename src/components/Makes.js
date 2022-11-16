import React from "react";
import MakeCard from "./MakeCard";
import { Link } from "react-router-dom";

function Makes({makesModels, onSubmitEdits}){
  return (
    <div>
      <h1>Explore vehicle makes and their models:</h1>
      {makesModels.map((make) => {
        return <MakeCard onSubmitEdits={onSubmitEdits} key={make.id} make={make}/>
      })}
      <Link className="toNew" to="/creator">Click here to generate a NEW make or model!</Link>
      {/* make a-tags or buttons for each available Make in the database */}
      {/* button opens a card with "show details" button that toggles */}
      {/* toggle opens details plus lists available cars of that make in the database */}
      {/*  */}
    </div>
    
  )
}
// display filtered list of models whose make_id match make.id
export default Makes;
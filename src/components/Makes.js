import React from "react";
import MakeCard from "./MakeCard";

function Makes({makes}){
  return (
    <div>
      <h1>Vehicle Makes:</h1>
      {makes.map((make) => {
        return <MakeCard key={make.id} make={make}/>
      })}
      {/* make a-tags or buttons for each available Make in the database */}
      {/* button opens a card with "show details" button that toggles */}
      {/* toggle opens details plus lists available cars of that make in the database */}
      {/*  */}
    </div>
  )
}

export default Makes;
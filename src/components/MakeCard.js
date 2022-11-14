import { React, useState } from "react";
import ModelCard from "./ModelCard";


function MakeCard({make}){
  // console.log(make.id)


  return (
    <div className="makeDiv">
      <h2>{make.name}</h2>
      <img src={make.logo_url} alt={make.name} />
      <p>Year founded: <strong>{make.year_founded}</strong></p>
      <p>Headquarters location: <strong>{make.hq}</strong></p>
      <button>Show/hide MODELS for this Make</button>
      {make.models.map((model) => <ModelCard model={model}/>)}
      
       {/* needs a list of available models to show up here 
       clicking on one of these models filters model state to show just that model card
       has back arrow to return to make card area */}
    </div>
  )
}

export default MakeCard;
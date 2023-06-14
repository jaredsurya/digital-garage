import { React, useState } from "react";
import ModelCard from "./ModelCard";

// Card including car make

function MakeCard({make, onSubmitEdits, onDelete}){
  const [showing, setShowing] = useState(false)
  
  function handleToggle(){
      setShowing(!showing)
  }

  return (
    <div className="makeDiv">
      <h2>{make.name}</h2>
      <img src={make.logo_url} alt={make.name} />
      <p>Year founded: <strong>{make.year_founded}</strong></p>
      <p>Headquarters location: <strong>{make.hq}</strong></p>
      {showing ? 
      make.models.map((model) => <ModelCard onSubmitEdits={onSubmitEdits} key={model.id} model={model} onDelete={onDelete}/>) 
      : null }
      <button onClick={handleToggle}>Show/hide MODELS for this Make</button>
    </div>
  )
}

export default MakeCard;
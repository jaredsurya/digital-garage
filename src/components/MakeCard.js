import React from "react";

function MakeCard({make}){
  return (
    <div className="makeDiv">
      <h2>{make.name}</h2>
      <img src={make.logo_url} alt={make.name} />
      <p>Year founded: <strong>{make.year_founded}</strong></p>
      <p>Headquarters location: <strong>{make.hq}</strong></p>
      <button>View MODELS for this Make</button>
    </div>
  )
}

export default MakeCard;
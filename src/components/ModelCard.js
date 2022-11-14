import React from "react";

function ModelCard({model}){
  return (
    <div className="modelDiv">
      <h2>{model.name}</h2>
      <img src={model.img} alt={model.name} />
      <p>Miles per gallon: <strong>{model.mpg}</strong></p>
      <p>Drivetrain: <strong>{model.drivetrain}</strong></p>
      <p>Horsepower: <strong>{model.horsepower}</strong></p>
      <p>Number of seats: <strong>{model.seats}</strong></p>
      <p>Body type: <strong>{model.body}</strong></p>
      <p>Number of doors: <strong>{model.doors}</strong></p>

      {/* has clickable make detail as well. clicking it shows single make card with clickable associated models listed. */}
    </div>
  )
}

export default ModelCard;
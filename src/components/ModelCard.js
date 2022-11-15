import React from "react";

function ModelCard({model}){
  // v opens an editing tab and makes PATCH request to backend
  function handleUpdate(id){
    fetch(`http://localhost:9292/model/${id}`)
    //needs to update state
  }

  // v deletes model from database completely
  function handleDelete(id){
    console.log(id)
    fetch(`http://localhost:9292/model/${id}`)
  // needs to update state
  }
  
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
      {/* Two buttons below need to integrate with UPDATE and DELETE (CRUD ) */}
      <button onClick={() => handleUpdate(model.id)}>UPDATE this model</button>
      <button onClick={() => handleDelete(model.id)}>DELETE this model</button>
    </div>
  )
}

export default ModelCard;
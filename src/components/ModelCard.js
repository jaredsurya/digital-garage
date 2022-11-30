import {React, useState} from "react";
import Description from "./Description";
import ModelEditor from "./ModelEditor";

function ModelCard({model, onSubmitEdits, onDelete}){
  const [toggleEdit, setToggleEdit] = useState(true)
  
  // v opens an editing tab
  function handleEdit(){
    if (toggleEdit) {
      setToggleEdit(!toggleEdit)
    } else {
      setToggleEdit(!toggleEdit)
    }
  }

  // v deletes model from database completely
  function handleDelete(e){
    e.preventDefault()
    fetch(`http://localhost:9292/models/${model.id}`,{
      method: 'DELETE',
    })
    onDelete(model)
  }
  
  return (
    <div className="modelDiv">
      <h2>{model.name}</h2>
      <img src={model.img} alt={model.name} />
      {toggleEdit ? <Description model={model}/> : <ModelEditor setToggleEdit={setToggleEdit} toggleEdit={toggleEdit} onSubmitEdits={onSubmitEdits} model={model} />}
      <button onClick={() => handleEdit(model.id)}>VIEW / EDIT details</button>
      <button onClick={(e) => handleDelete(e)}>DELETE this model</button>
    </div>
  )
}

export default ModelCard;
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
    //.then((res) => res.json())
    onDelete(model)
  }
  // send a callback fn down via props to here
  // cb fn should be responsible for updating state in app

  
  return (
    <div className="modelDiv">
      <h2>{model.name}</h2>
      <img src={model.img} alt={model.name} />
      {toggleEdit ? <Description model={model}/> : <ModelEditor setToggleEdit={setToggleEdit} toggleEdit={toggleEdit} onSubmitEdits={onSubmitEdits} model={model} />}
      {/* Two buttons below need to integrate with UPDATE and DELETE (CRUD ) */}
      <button onClick={() => handleEdit(model.id)}>VIEW / EDIT details</button>
      <button onClick={(e) => handleDelete(e)}>DELETE this model</button>
    </div>
  //UPDATE BUTTON fires a function
  //when the function fires, a FORM shows up
  //existing 6 attributes pre-populates the form, statefully
  //when changes are made to form, state changes too.
  //SUBMIT button fires PATCH request.
  )
}

export default ModelCard;
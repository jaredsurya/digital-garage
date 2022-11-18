import {React, useState} from 'react'

const ModelEditor = ({model, onSubmitEdits, toggleEdit, setToggleEdit}) => {
  const [formValues, setFormValues] = useState(model) 
  const changeHandler = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  function submitHandler(e){
    e.preventDefault()
    fetch(`http://localhost:9292/models/${formValues.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
     },
      body: JSON.stringify(
        formValues
     )})
     .then((res) => res.json())
     .then((edits) => onSubmitEdits(edits))
    setToggleEdit(!toggleEdit)
  }

  return (
    <div>
      <form onChange={changeHandler} onSubmit={submitHandler}> 
        Miles per gallon: <input type="text" name='mpg' value={formValues.mpg}/><br/>
        Drivetrain: <input type="text" name='drivetrain' value={formValues.drivetrain}/><br/>
        Horsepower: <input type="number" name='horsepower' value={formValues.horsepower}/><br/>
        Number of seats: <input type="number" name='seats' value={formValues.seats}/><br/>
        Body type: <input type="text" name='body' value={formValues.body}/><br/>
        Number of doors: <input type="number" name='doors' value={formValues.doors}/><br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default ModelEditor

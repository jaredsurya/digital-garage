import React from 'react'

const ModelEditor = ({model, setModel}) => {
  const changeHandler = (e) => {
    model[e.target.name] = e.target.value
  }
  //when changes are made to state, the value changes too
  return (
    <div>
      <form onChange={changeHandler}> 
        Miles per gallon: <input type="text" name='mpg' value={model.mpg}/><br/>
        Drivetrain: <input type="text" name='drivetrain' value={model.drivetrain}/><br/>
        Horsepower: <input type="number" name='horsepower' value={model.horsepower}/><br/>
        Number of seats: <input type="number" name='seats' value={model.seats}/><br/>
        Body type: <input type="text" name='body' value={model.body}/><br/>
        Number of doors: <input type="number" name='doors' value={model.doors}/><br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default ModelEditor

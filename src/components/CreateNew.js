import React from "react";

function CreateNew(){
  return (
    <div>
      <h1>Generate a New Make or Model:</h1>
      <div className="make-form">
        <h3>New MAKE Creator:</h3>
        <form onSubmit={(e) => e.preventDefault}>
          <input type="undefined" placeholder="Company Name:" />
          <input type="undefined" placeholder="URL for Logo Image:" />
          <input type="undefined" placeholder="Headquarters Location:" />
          <input type="undefined" placeholder="Year company founded:" />
          <input type="submit" />
        </form>
      </div>
      <div className="model-form">
        <h3>New MODEL Creator:</h3>
        <form>
          <input type="text" placeholder="Model Name" />
          <input type="text" placeholder="Vehicle Image URL" />
          <input type="number" step="1" placeholder="Average MPG" />
          <input type="text" placeholder="Drivetrain (FWD, RWD)" />
          <input type="text" placeholder="Horsepower" />
          <input type="text" placeholder="Body-type van, car, suv" />
          <input type="number" step="1" placeholder="Number of Seats" />
          <input type="number" step="1" placeholder="Number of Doors" />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default CreateNew;
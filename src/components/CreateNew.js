import React from "react";

function CreateNew(){
  return (
    <div>
      <h1>Generate a New Make or Model:</h1>
      <div className="make-form input-area">
        <h3>New MAKE Creator:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
          <label>
            Company name: <input type="text" placeholder="ex. Ford, Mazda..." />
          </label><br/>
          <label>
            URL for logo image: <input type="text" placeholder="www.example.com/img" />
          </label><br/>
          <label> 
            Headquarters location: <input type="text" placeholder="ex. Orlando, FL, USA" />
          </label><br/>  
          <label>  
            Year company was founded: <input type="text" placeholder="ex. 1984" />
          </label><br/>  
            <input type="submit" />
        </form>
      </div>
      <div className="model-form input-area">
        <h3>New MODEL Creator:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
          <label>  
            Model name: <input type="text" placeholder="ex. Mustang, Camry" />
          </label><br/>  
          <label>  
            Vehicle image URL: <input type="text" placeholder="www.example.com/img" />
          </label><br/>
          <label>  
            Fuel economy (MPG): <input type="number" step="1" placeholder="ex. 45 (integers only)" />
          </label><br/>  
          <label>
            Drivetrain: <input type="text" placeholder="ex. FWD, AWD, 4WD" />
          </label><br/>
          <label>  
            Horsepower: <input type="text" placeholder="ex. 120 (integers only)" />
          </label><br/>  
          <label>  
            Body type: <input type="text" placeholder="ex. van, car, suv, truck" />
          </label><br/>  
          <label>  
            Number of seats: <input type="number" step="1" placeholder="(integer only)" />
          </label><br/>    
          <label>
            Number of doors: <input type="number" step="1" placeholder="(integer only)" />
          </label><br/>  
            <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default CreateNew;
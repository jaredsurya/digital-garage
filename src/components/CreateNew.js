import React, {useState} from "react";

function CreateNew(){
  
  const [makeFormState, setMakeFormState] = useState({
    name: "",
    year_founded: "",
    logo_url: "",
    hq: ""
  });

  const [modelFormState, setModelFormState] = useState({
    body: "",
    doors: "",
    drivetrain: "",
    horsepower: "",
    img: "",
    make: "", // <-- needs provisioning in the server-side to take make name and make and new make_id if it doesn't exist or use existing make_id number if it matches the name. 
    mpg: "",
    name: "",
    seats: ""
  });
  
  const handleChange = (event) => {
    setMakeFormState({ ...makeFormState, [event.target.name]: event.target.value });
  };
// HANDLE CHANGE AND SUBMIT NEED TO BE FIXED TO COMPLETE CONTROLLED FORM(S)
  return (
    <div className="forms">
      <h1>Generate a New Make or Model:</h1>
      <div className="make-form input-area">
        <h3>New MAKE Creator:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
          //e.target.reset()
        }}>
          <label>
            Company name: <input onChange={handleChange} value={makeFormState.name} type="text" placeholder="ex. Ford, Mazda..." />
          </label><br/>
          <label>
            URL for logo image: <input onChange={handleChange} value={makeFormState.logo_url} type="text" placeholder="www.example.com/img" />
          </label><br/>
          <label> 
            Headquarters location: <input onChange={handleChange} value={makeFormState.hq} type="text" placeholder="ex. Orlando, FL, USA" />
          </label><br/>  
          <label>  
            Year company was founded: <input onChange={handleChange} value={makeFormState.year_founded} type="number" placeholder="ex. 1984" />
          </label><br/>  
            <input type="submit" />
        </form>
      </div>
      <div className="model-form input-area">
        <h3>New MODEL Creator:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log(e.target[0].value)
          //e.target.reset()
        }}>
          <label>  
            Model name: <input type="text" placeholder="ex. Mustang, Camry" />
          </label><br/>  
          <label>  
            Make of vehicle: <input type="text" placeholder="ex. Ford, Honda" />
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
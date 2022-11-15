import React, {useState} from "react";

function CreateNew(){
  
  // needs to update state

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
  
  const handleMakeChange = (event) => {
    setMakeFormState({ ...makeFormState, [event.target.name]: event.target.value });
  };

  const handleModelChange = (event) => {
    setModelFormState({...modelFormState, [event.target.name]: event.target.value })
  }

  const handleMakeSubmit = () => {
    console.log(makeFormState)
    fetch('http://localhost:9292/new-make', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        makeFormState
      ),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log('error'))
  }
  
  const handleModelSubmit = () => {
    console.log(modelFormState)
    fetch('http://localhost:9292/new-model', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        modelFormState
      ),
      // how do i take the "make" key and use it to set the numerical make_id(foreign key) in ruby, that my model should have??

    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log('error'))
  }

  return (
    <div className="forms">
      <h1>Generate a New Make or Model:</h1>
      <div className="make-form input-area">
        <h3>New MAKE Creator:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleMakeSubmit()
          e.target.reset()
        }}>
          <label>
            Company name: <input name="name" onChange={handleMakeChange} type="text" placeholder="ex. Ford, Mazda..." />
          </label><br/>
          <label>
            URL for logo image: <input name="logo_url" onChange={handleMakeChange} value={makeFormState.logo_url} type="text" placeholder="www.example.com/img" />
          </label><br/>
          <label> 
            Headquarters location: <input name="hq" onChange={handleMakeChange} value={makeFormState.hq} type="text" placeholder="ex. Orlando, FL, USA" />
          </label><br/>  
          <label>  
            Year company was founded: <input name="year_founded" onChange={handleMakeChange} value={makeFormState.year_founded} type="number" placeholder="ex. 1984" />
          </label><br/>  
            <input type="submit" />
        </form>
      </div>
      <div className="model-form input-area">
        <h3>New MODEL Creator:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleModelSubmit()
          e.target.reset()
        }}>
          <label>  
            Model name: <input name="name" onChange={handleModelChange} type="text" placeholder="ex. Mustang, Camry" />
          </label><br/>  
          <label>  
            Make of vehicle: <input name="make" onChange={handleModelChange} type="text" placeholder="ex. Ford, Honda" />
          </label><br/>  
          <label>  
            Vehicle image URL: <input name="img" onChange={handleModelChange} type="text" placeholder="www.example.com/img" />
          </label><br/>
          <label>  
            Fuel economy (MPG): <input name="mpg" onChange={handleModelChange} type="number" step="1" placeholder="ex. 45 (integers only)" />
          </label><br/>  
          <label>
            Drivetrain: <input name="img" onChange={handleModelChange} type="text" placeholder="ex. FWD, AWD, 4WD" />
          </label><br/>
          <label>  
            Horsepower: <input name="horsepower" onChange={handleModelChange} type="text" placeholder="ex. 120 (integers only)" />
          </label><br/>  
          <label>  
            Body type: <input name="body" onChange={handleModelChange} type="text" placeholder="ex. van, car, suv, truck" />
          </label><br/>  
          <label>  
            Number of seats: <input name="seats" onChange={handleModelChange} type="number" step="1" placeholder="(integer only)" />
          </label><br/>    
          <label>
            Number of doors: <input name="doors" onChange={handleModelChange} type="number" step="1" placeholder="(integer only)" />
          </label><br/>  
            <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default CreateNew;
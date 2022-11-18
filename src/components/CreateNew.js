import React, {useState} from "react";

function CreateNew({makesModels, setMakesModels}){
   //console.log("MAKES", makesModels)
  // needs to update state
  const defaultMakeForm = {
    name: "",
    year_founded: "",
    logo_url: "",
    hq: ""
  }
  const [makeFormState, setMakeFormState] = useState(defaultMakeForm);

  const defaultModelForm = {
    body: "",
    doors: "",
    drivetrain: "",
    horsepower: "",
    img: "",
    make: "", 
    mpg: "",
    name: "",
    seats: ""
  }
  const [modelFormState, setModelFormState] = useState(defaultModelForm);
  
  const handleMakeChange = (event) => {
    setMakeFormState({ ...makeFormState, [event.target.name]: event.target.value });
  };

  const handleModelChange = (event) => {
    setModelFormState({...modelFormState, [event.target.name]: event.target.value })
  }

  const handleMakeSubmit = () => {
    // console.log(makeFormState)
    fetch('http://localhost:9292/makes/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        makeFormState
      ),
    })
      .then((res) => res.json())
      .then((returnedMake) => {
        makeUpdater(returnedMake)
        //console.log(returnedMake)
        // NEEDS stateful response handling
        alert("New MAKE created!")
      })
      .catch((err) => console.log('Server error', err))
      setMakeFormState(defaultMakeForm)
  }
  
  const handleModelSubmit = () => {
    //console.log(modelFormState)
    fetch('http://localhost:9292/models/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        modelFormState
      ),
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)
        modelUpdater(res)
        alert("New MODEL created!")
      })
      // make sure to update state to reflect the change
      .catch((err) => console.log('Server error'))
      setModelFormState(defaultModelForm)
  }
  //console.log(makesModels)
//console.log(setMakesModels)
  
function makeUpdater(returnedMake){
    //console.log("RETURNED", returnedMake)
    //console.log("makesModels", makesModels)
    setMakesModels([...makesModels, returnedMake])
  }

  function modelUpdater(res){
    const currentMake = makesModels.find((make) => make.id === res.make_id)
    const updatedMake = {...currentMake, models:[...currentMake.models, res]}
    const updatedMakes = makesModels.map((make) => {
      if(make.id === res.make_id){
        return updatedMake
      } else {
        return make
      }
    })
    setMakesModels(updatedMakes)
  }

  return (
    <div className="forms">
      <h1>Generate a New Make or Model:</h1>
      <div className="make-form input-area">
        <h3>New MAKE Creator:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleMakeSubmit()
        }}>
          <label>
            Company name: <input name="name" onChange={handleMakeChange} value={makeFormState.name} type="text" placeholder="ex. Ford, Mazda..." />
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
        }}>
          <label>  
            Model name: <input name="name" onChange={handleModelChange} value={modelFormState.name} type="text" placeholder="ex. Mustang, Camry" />
          </label><br/>  
          <label>  
            Make of vehicle: <input name="make" onChange={handleModelChange} value={modelFormState.make} type="text" placeholder="*Existing makes only*" />
          </label><br/>  
          <label>  
            Vehicle image URL: <input name="img" onChange={handleModelChange} value={modelFormState.img} type="text" placeholder="www.example.com/img" />
          </label><br/>
          <label>  
            Fuel economy (MPG): <input name="mpg" onChange={handleModelChange} value={modelFormState.mpg} type="number" step="1" placeholder="ex. 45 (integers only)" />
          </label><br/>  
          <label>
            Drivetrain: <input name="drivetrain" onChange={handleModelChange} value={modelFormState.drivetrain} type="text" placeholder="ex. FWD, AWD, 4WD" />
          </label><br/>
          <label>  
            Horsepower: <input name="horsepower" onChange={handleModelChange} value={modelFormState.horsepower} type="text" placeholder="ex. 120 (integers only)" />
          </label><br/>  
          <label>  
            Body type: <input name="body" onChange={handleModelChange} value={modelFormState.body} type="text" placeholder="ex. van, car, suv, truck" />
          </label><br/>  
          <label>  
            Number of seats: <input name="seats" onChange={handleModelChange} value={modelFormState.seats} type="number" step="1" placeholder="(integer only)" />
          </label><br/>    
          <label>
            Number of doors: <input name="doors" onChange={handleModelChange} value={modelFormState.doors} type="number" step="1" placeholder="(integer only)" />
          </label><br/>  
            <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default CreateNew;
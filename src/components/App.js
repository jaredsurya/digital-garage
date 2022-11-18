import React, {useState, useEffect} from "react";
import '../App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import CreateNew from "./CreateNew";
import Home from "./Home"
import Makes from "./Makes"

// STRETCH GOAL: Delete Make w/ all of associated models

function App() {
  const [makesModels, setMakesModels] = useState([])
  const navigate = useNavigate()
  
  function onDelete(toBeDeleted){
    const editedMakesModels = makesModels.map((make) => {
      if(make.id === toBeDeleted.make_id){
        make.models = make.models.filter((model) => {
          if(toBeDeleted.id !== model.id){
            return model
          }
        })
        return make
      }else{
        return make
      }
    })
    setMakesModels(editedMakesModels)
}
  
  function onSubmitEdits(editedModel){
    console.log(editedModel)
    const appropriateMake = makesModels.map((make) =>{
      if(make.id === editedModel.make_id){
        //console.log("MAKE", make)
        make.models = make.models.map((model) => {
          if(model.id == editedModel.id){
            //console.log("MODEL", typeof(model.id))
            //console.log("EDITMODEL", typeof(editedModel.id))
            return editedModel
          }else{
            return model
          }
        })
        return make
      }else{
        return make
      }
    })
    setMakesModels(appropriateMake)
  }

  useEffect(() => {
    fetch("http://localhost:9292/makes")
    .then((r) => r.json())
    .then((data) => {
      setMakesModels(data)
    })
  }, [])
  
  return (
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
        {/* <button onClick={() => navigate(1)}>Go forward</button> */}
        <nav>
          <Link to="/makes">Vehicles</Link>
          <Link to="/creator">Create Your Own</Link>
          <Link to="/">Home Page</Link>
        </nav>

        <Routes>
          <Route path="/makes" element={<Makes onDelete={onDelete} onSubmitEdits={onSubmitEdits} makesModels={makesModels}/>} />
          <Route path="/creator" element={<CreateNew setMakesModels={setMakesModels} makesModels={makesModels}/>} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
 
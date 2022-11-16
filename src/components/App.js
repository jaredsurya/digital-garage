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

// * making both Makes and Models stateful via their server responses
//   * Cards are shown correctly for make and model

// * finishing patch request via form on ModelCard component
//   * getting form's state to respond correctly to input 
//   * updating components state to produce the edited details on submit

// * getting delete button to work
//   * sending fetch request
//   * updating state to show 1 less card

// CHEAT SHEET FOR ARRAYS

// Add: use the spread operator ([...])
//   - Always use brackets or hashes when using a spread operator if the original is an array ([]) or an object ({})
// Remove: use .filter
// Update: use .map

function App() {
  const [makesModels, setMakesModels] = useState([])
  const navigate = useNavigate()
  
  console.log(makesModels)
  
  function onSubmitEdits(editedModel){
    console.log(editedModel)
    makesModels.map()
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
          <Route path="/makes" element={<Makes onSubmitEdits={onSubmitEdits} makesModels={makesModels}/>} />
          <Route path="/creator" element={<CreateNew setMakesModels={setMakesModels} makesModels={makesModels}/>} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
 
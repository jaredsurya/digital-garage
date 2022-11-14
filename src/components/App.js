import React, {useState, useEffect} from "react";
import '../App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CreateNew from "./CreateNew";
import Home from "./Home"
import Makes from "./Makes"
import Models from "./Models"

// * One page shows all Makes
// * One page shows all Models
// * One page shows create new for Makes + for Models, submit buttons for each
// * Clicking on one Make card opens new page and shows more info about make, plus associated models listed (with cards?)
// * Clicking on one Model card expands card & toggles show more info, includes make <a> tag to link to make from model
// * 

function App() {
  const [makes, setMakes] = useState([])
  const [models, setModels] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/makes")
    .then((r) => r.json())
    .then((data) => {
      setMakes(data)
      console.log(makes)
    })
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/models")
    .then((r) => r.json())
    .then((data) => {
      setModels(data)
      console.log(models)
    })
  }, [])  
  
  return (
    <Router>
      <div>
        <nav>
          <Link to="/makes">Vehicle Makes</Link>
          <Link to="/models">Vehicle Models</Link>
          <Link to="/creator">Create Your Own</Link>
          <Link to="/">Home Page</Link>
        </nav>

        <Routes>
          <Route path="/makes" element={<Makes makes={makes}/>} />
          <Route path="/models" element={<Models models={models}/>} />
          <Route path="/creator" element={<CreateNew />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
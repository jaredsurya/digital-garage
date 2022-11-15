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

// * One page shows all Makes
// * One page shows all Models
// * One page shows create new for Makes + for Models, submit buttons for each
// * Clicking on one Make card opens new page and shows more info about make, plus associated models listed (with cards?)
// * Clicking on one Model card expands card & toggles show more info, includes make <a> tag to link to make from model
// * 

function App() {
  const [makesModels, setMakesModels] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/all")
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
          <Route path="/makes" element={<Makes makesModels={makesModels}/>} />
          <Route path="/creator" element={<CreateNew />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
 
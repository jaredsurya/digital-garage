import React from "react";
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// * One page shows all Makes
// * One page shows all Models
// * One page shows create new for Makes + for Models, submit buttons for each
// * Clicking on one Make card opens new page and shows more info about make, plus associated models listed (with cards?)
// * Clicking on one Model card expands card & toggles show more info, includes make <a> tag to link to make from model
// * 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/makes">Vehicle Makes</Link>
          <Link to="/models">Vehicle Models</Link>
          <Link to="/creator">Create Your Own</Link>
          <Link to="/">Home Page</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
 
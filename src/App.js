import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Login from './components/Login';
import Signin from './components/Signin';
import Logout from './components/Logout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const pageSize = 5 ;
  const apiKey = "acf267fbc9744509967d25d36b5a18a0";
  const [progress , setProgress]=useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><News key="general" apikey={apiKey} country="in" category="general" pageSize={pageSize} setProgress={setProgress}/></Route>
          <Route exact path="/science"><News key="science" apikey={apiKey} country="in" category="science" pageSize={pageSize} setProgress={setProgress}/></Route>
          <Route exact path="/technology"><News key="technology" apikey={apiKey} country="in" category="technology" pageSize={pageSize} setProgress={setProgress}/></Route>
          <Route exact path="/sports"><News key="sports" apikey={apiKey} country="in" category="sports" pageSize={pageSize} setProgress={setProgress}/></Route>
          <Route exact path="/health"><News key="health" apikey={apiKey} country="in" category="health" pageSize={pageSize} setProgress={setProgress}/></Route>
          <Route exact path="/business"><News key="business" apikey={apiKey} country="in" category="business" pageSize={pageSize} setProgress={setProgress}/></Route>
          <Route exact path="/entertainment"><News key="entertainment" apikey={apiKey} country="in" category="entertainment" pageSize={pageSize} setProgress={setProgress}/></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/signin"><Signin /></Route>
          <Route exact path="/logout"><Logout /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

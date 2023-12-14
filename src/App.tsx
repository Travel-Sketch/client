import React from 'react';
import './App.css';
import RouteLink from "./routes/RouteLink";
import NavBar from "./component/navbar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <RouteLink />
    </div>
  )
}

export default App;

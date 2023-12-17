import React from 'react';
import RouteLink from "./routes/RouteLink";
import NavBar from "./component/navbar/NavBar";
import {GlobalStyles} from "./styles/GlobalStyles";

const App = () => {
  return (
    <div>
      <NavBar />
      <RouteLink />
      <GlobalStyles />
    </div>
  )
}

export default App;

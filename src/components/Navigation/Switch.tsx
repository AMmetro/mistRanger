import React from 'react';
import {Route, Routes} from "react-router-dom";

import Unit from '../Units/Units'
import Login from '../Login'
import Coocies from '../Coocies'


function App() {
  return (
    <div className="App">
            <Routes>
              <Route path={"/unit"} element={<Unit/>}/>
              <Route path={"/login"} element={<Login/>} />
              <Route path={"/coocies"}element={<Coocies/>} />
              <Route path={"/"} element={<div></div>} />
              <Route path={"/*"} element={<h1>page not found</h1>} />
            </Routes>
    </div>
  );
}

export default App;

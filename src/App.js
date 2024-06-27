import React from "react";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from "./navbar";

function App() {
  return (
    <div className="">
    <Routes>
      <Route path="/" element={<Navbar/> }> </Route>
    </Routes>  
    </div>
  );
}

export default App;

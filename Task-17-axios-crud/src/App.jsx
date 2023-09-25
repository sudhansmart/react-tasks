import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { UserContextProvider } from "./Components/context/usercontext";
import './app.css'
import Table from "./Components/Table";
function App() {
  return (
    <>
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </UserContextProvider>
     
    </>
  );
}

export default App;
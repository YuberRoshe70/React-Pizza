import React from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

import "./scss/app.scss";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";

function App() {
  const [value, setValue] = React.useState('')
  return (
    <div className="wrapper">
      <Header  value={value}  setValue ={setValue}/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home  value={value}/>} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

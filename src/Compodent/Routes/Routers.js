import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../NotFound/NotFound";
import Abouts from "../pages/Abouts";
import Contact from "../pages/Contact";
import { userContext } from "../Usecontext/ExampleContext";

const Routers = () => {
    const data=useContext(userContext)
    console.log(data);
    const{route,element}=data
  return (
    <BrowserRouter>
      <Routes>
      {
        data.map((item)=>{
            const{id,route,element}=item
            return<Route key={id} path={route} element={element}/>
        })
      }
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;

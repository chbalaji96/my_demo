import React from 'react'
import Home from '../pages/Home';
import Abouts from '../pages/Abouts';
import Contact from '../pages/Contact';
import DemoReduser from '../../UseReduser/UseReduser';
import ReduxUser from '../../UseReduser/ReduxUser';

export const userContext=React.createContext();

export const ExampleContext = ({children}) => {

    const data=[
        
    {
        id:1,
        route:"/",
        element:<Home/>
    },
    {
        id:2,
        route:"/about",
        element:<Abouts/>
    },

    {
        id:3,
        route:"/contact",
        element:<Contact/>
    },
    {
        id:4,
        route:"/demo",
        element:<DemoReduser/>
    },
    {
        id:5,
        route:"/Redux",
        element:<ReduxUser/>
    }





]
  return (
    <userContext.Provider  value={data}>
        {children}
    </userContext.Provider>
  )
}

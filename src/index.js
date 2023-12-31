import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './Compodent/App';
import { ExampleContext } from './Compodent/Usecontext/ExampleContext';


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ExampleContext>
      <App/>
    </ExampleContext>
 
)
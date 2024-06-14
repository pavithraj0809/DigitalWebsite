import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App'
 import './Components/Services.css';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Egnavbar from './Components/navbar/Egnavbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Egnavbar/> */}
   <App /> 
   
   <Aboutus/>
   <Services/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

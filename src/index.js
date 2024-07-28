//import React from 'react';  This statement in not needed from React 18 onwards
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import MainHeader from './Layout/Header';
import MainFooter from './Layout/Footer';
import MainBody from './MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 // passing properties (props) from Student components
  <div style={{backgroundColor:"black",color:"grey"}}> 
     <MainHeader/>
     <div className='px-4'>
     <MainBody/>
     </div>
     <MainFooter/>
  </div>
  //<React.StrictMode>
   // <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//import React from 'react';  This statement in not needed from React 18 onwards
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){
  return(<div>Welcome to React Course
    <ul>
      <li>Hello</li>
      <li>Welcome</li>
    </ul></div>);
}
const headerStyle={
  backgroundColor:"blue"
};
function MainHeader(){
  return(<h1 className='header fst-italic' style={headerStyle}>REACT COURSE</h1>) // style is an object. 
  //It can also be used as a const object.
  // className is used to give bootstrap class or our custom class. don't use 'class', its 'className'
}
function MainFooter(){
  return(<p style={{color:"red",backgroundColor:"grey"}}>Happy Coding</p>) // in jsx style is an object. So use {{}}
}
function Students(){
  const fullName="Sruthi AK"; // use ` symbol for string interpolation along with $
  const programmingExp=3;
  return(<div className='congtainer'> 
    <div className='row border'>
      <div className='col-2'>
        <img src={`https://ui-avatars.com/api/?name=${fullName}`} className='w-100'></img> 
      </div>
      <div className='col-10'>
        Student: {fullName} <br/>
        Programming Exp: {programmingExp}
      </div>

    </div>

  </div>)
}



root.render(
 
  <div>
     <MainHeader/>
     <MainBody/>
     <Students/>
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

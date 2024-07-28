import { faker } from '@faker-js/faker'  // installed 3rd party library
import React from 'react';

/*
const Student= (props) =>{
    //const fullName="Sruthi AK"; // use ` symbol for string interpolation along with $
    //const programmingExp=3; // commenting because we are using props now
    return(
      <div className='col-10 p-4'>
      <div className='row border'>
        <div className="col-1">
          
          <img src={faker.image.avatar()} className='w-100 py-2'></img> 
        </div>
        <div className='col-10'>
          Student: {props.fullName} <br/>
          Programming Exp: {props.programmingExp}
        </div>
        <div className='col-1'>
          {props.children}
        </div>
      </div>
      </div>
  
    );
  }
  */

  //Class component. props in functional comp becomes this.props in class. Use render()
  class Student extends React.Component{
    //const fullName="Sruthi AK"; // use ` symbol for string interpolation along with $
    //const programmingExp=3; // commenting because we are using props now
    render(){
    return(
      <div className='col-10 p-4'>
      <div className='row border'>
        <div className="col-1">
          
          <img src={faker.image.avatar()} className='w-100 py-2'></img> 
        </div>
        <div className='col-10'>
          Student: {this.props.fullName} <br/>
          Programming Exp: {this.props.programmingExp}
        </div>
        <div className='col-1'>
          {this.props.children}
        </div>
      </div>
      </div>
  
    );
  }
  }
  export default Student;
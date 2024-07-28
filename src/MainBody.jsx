import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

/*

This is a functional component.

const MainBody=()=>{
    //StudentReview is the child component of Student. It is passed as props.children
    return(<div style={{minHeight:"70vh"}}>
        Welcome to React Course
      <ul>
        <li>Hello</li>
        <li>Welcome</li>
      </ul>
      
     <div className='container row'>Students enrolled</div>
     <Student programmingExp={2} fullName="Sruthi AK"> <StudentReview/> </Student> 
     <Student programmingExp={3} fullName="Hari R"><StudentReview/></Student> 
     <Student programmingExp={6} fullName="Jiji T"></Student> 
      </div>);
}
*/

//Class comp of above functional component. Use render()

class MainBody extends React.Component {
    //StudentReview is the child component of Student. It is passed as props.children
    render(){
    return(<div style={{minHeight:"70vh"}}>
        Welcome to React Course
      <ul>
        <li>Hello</li>
        <li>Welcome</li>
      </ul>
      
     <div className='container row'>Students enrolled</div>
     <Student programmingExp={2} fullName="Sruthi AK"> <StudentReview/> </Student> 
     <Student programmingExp={3} fullName="Hari R"><StudentReview/></Student> 
     <Student programmingExp={6} fullName="Jiji T"></Student> 
      </div>);
    }
}

export default MainBody;

  
  
  
  
  
  
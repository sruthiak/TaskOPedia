/*
Functional Component

const StudentReview =()=>{
    return(
        <div>
        <i class="bi bi-hand-thumbs-up-fill text-success p-1" style={{cursor:"pointer"}}></i>
        <i class="bi bi-hand-thumbs-down-fill text-danger p-1" style={{cursor:"pointer"}}></i>
        </div>
    );
}
*/

import React from "react";

//Class Component of above functional component. Class comp has a render method. Return is inside render method
class StudentReview extends React.Component{
    render(){
    return(
        <div>
        <i class="bi bi-hand-thumbs-up-fill text-success p-1" style={{cursor:"pointer"}}></i>
        <i class="bi bi-hand-thumbs-down-fill text-danger p-1" style={{cursor:"pointer"}}></i>
        </div>
    );
    }
}

export default StudentReview;
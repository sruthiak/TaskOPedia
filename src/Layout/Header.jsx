
import logo from "../images/react js_logo_react_react native_icon.png"

function SubHeader(){
    return(<h2 style={{textAlign:"center"}}>Welcome to React course</h2>);
    }
const headerStyle={
      backgroundColor:"black"
    };
const MainHeader=()=>{
      return(<div>
        <div className="pt-2 py-1 pl-2" style={{backgroundColor:"black"}}> 
        <img src={logo} style={{height:"35px", verticalAlign:"top", marginRight:"5px"}}/>
        <span  className='h2 pt-4 header fst-italic' style={headerStyle}>TaskOPedia</span>
        </div>
        <SubHeader/></div>
      ); // style is an object. 
      //It can also be used as a const object.
      // className is used to give bootstrap class or our custom class. don't use 'class', its 'className'
    }

export default MainHeader;
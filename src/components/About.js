import User from "./user";
import Userclass from "./Userclass";
import React from "react";
class About extends React.Component {
    constructor(props){
        super(props)
        // console.log("Parent constructor ")
    }
    componentDidMount(){
        //api call 
        // console.log("countdidmount");
    }
  render() {
    console.log("parent redering");
    return (
      <div className="About-Page container">
        <h1>this is about the page</h1>
        {/* // <User name = {"hii great to see you"} /> */}
        <Userclass name={"name :"} />
      </div>
    );
  }
}




// const About=()=>{
//     return(
//         <div className="About-Page container">
//             <h1>this is about the page</h1>
//            {/* // <User name = {"hii great to see you"} /> */}
//             <Userclass name= {"welcome from akshay saini side"} />
//         </div>
//         )
//     }
export default About;

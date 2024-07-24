import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userInfo:{
        login: "dummy",
        location: "Default"
      },
    };
    }
   async componentDidMount()
   {
    const data =await fetch("https://api.github.com/users/tushar-saini31");
    const json= await data.json();
   
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate()
  {
    console.log("compoent did Update");
  }
  componentWillUnmount(){
    console.log("compoenet will willunmount called");
  }

  render() {
    const{login, location}= this.state.userInfo;
    return (
      <div className="user-container">
        <h1>name:{login}</h1>
        <h3>address:{location} </h3>
        <h3>contact:@akshaySaini  </h3>
      </div>
    );
  }
}
export default Userclass;

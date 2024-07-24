import { LOGO_URL } from "../utils/constants";
import { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "./Usercontext";
import { useSelector } from "react-redux";
const Header = () => { 
  const[btnNameReact, setBtnNameReact]=useState("Login");
  //console.log("header render");
   const onlinestatus=useOnlineStatus();
   const{loggedInUser}=useContext(UserContext);
  useEffect(() => {
   // console.log("use efect is called");
  },[]);
  
  //subscribing to the store using the selector
  const cartItems=useSelector((store)=>store.cart.items);

    return (
      <div className="flex justify-between  bg-yellow-300 m-2 shadow-lg  ">
        <div className="logo">
          <img
            className="w-28" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ">
            <li className="px-4">Online Status: {onlinestatus? "✅":"🔴"}</li>
            <li  className="px-4"><Link to="/">Home </Link></li>
            <li className="px-4">
              <Link to="/about">About us</Link></li>
            <li className="px-4">
              <Link to="/contact">Contact Us
              </Link></li>
            <li className="px-4">
              <Link to="/cart">Cart-[{cartItems.length}]</Link></li>
              <li className="px-4">
              <Link to="/grocery">Grocery</Link></li>
            <button className="login-button"
            onClick={()=>{
              btnNameReact==="Login"
              ?setBtnNameReact("LogOut")
              :setBtnNameReact("Login");
            }}
            >{btnNameReact}</button>
            <li className="text-lg px-4">User :{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
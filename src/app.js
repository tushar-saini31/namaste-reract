import React, {lazy, useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/ReataurantMenu.js";
import UserContext from "./components/Usercontext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

// const Footer=()=>{
//     return (

//     )
// }


const Grocery=lazy(()=>import("./components/grocery.js"))
const AppLayout = () => {

  
  const[userName, setUserName]=useState();
  useEffect(()=>{
  // suppose making the api call and send user name and password
  const data={
    name:"Akshay saini"
  };
  setUserName(data.name);
  },[]);



  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const AppRouter=createBrowserRouter([
  
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
   {
    path:"/about",
    element: <About />,
   },
   {
    path: "/cart",
    element: <Cart />
   },
   {
    path:"/contact",
    element: <Contact />
   },
   {
    path:"/restaurants/:resId",
    element: <RestaurantMenu/>
   },
   {
    path:"/grocery",
    element: <Grocery/>
   }
  ],
  errorElement: <Error />
},
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);

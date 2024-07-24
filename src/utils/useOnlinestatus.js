import { useEffect,useState } from "react";

const useOnlineStatus = () => {
    const[onlineStatus,setOnlineStatus]= useState(true);

    useEffect(()=>{

    window.addEventListener("offine", ()=>{
         setOnlineStatus(false);
         //console.log("not connected ")
    });
    window.addEventListener("online", ()=>{
        setOnlineStatus(true);
        //console.log("connected to interenet");
   });

},[]);

    return onlineStatus;

};

export default useOnlineStatus;
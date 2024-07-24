import { useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-xl">Cart</h1>
            <ItemList item={cartItems}/>
        </div>
    );
};
export default Cart;
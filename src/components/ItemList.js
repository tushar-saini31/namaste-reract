
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem  } from "../utils/cartSlice";
const ItemList = ({ items, dummy }) => {
const dispatch = useDispatch(); 
const handleAddItem=(item )=>{
  //dispatch an action
   dispatch(addItem(item));
}
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-purple-200 text-left border-b-2 flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-xl  ">{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs py-2 my-2">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="flex justify-center ">
              <button className="text-sm bg-black shadow-lg absolute  p-2 h-10 rounded-lg w-16  text-white "
              onClick={()=>handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

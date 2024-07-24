import {  useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./Restaurantcategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  const[showIndex,setShowIndex]=useState(0)
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{name}</h1>
      <h4 className="font-medium my-1">{cuisines}</h4>
      <ul>
        <li className="font-medium my-1">{costForTwoMessage}</li>
        <li className="font-medium my-1">{areaName}</li>
      </ul>

      {categories.map((categories, index) => (
        <Restaurantcategory
          key={categories?.card?.card?.title}
          data={categories?.card?.card}
          showItems={index==showIndex ? true: false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}

      {/* <h2>Recomended</h2>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name}-{"Rs"}
          {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
        </li>
      ))} */}
    </div>
  );
};
export default RestaurantMenu;

import Restrocard,{WithPromotedLabel} from "./Restrocard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
const Body = () => {
  const [ListofRestaurants, setListofRestaurant] = useState([]);
  const [filteredResto, SetfilteredResto] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ReaturantcardPromoted= WithPromotedLabel(Restrocard);
//console.log(ListofRestaurants)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
       //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      //"https: //www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chainning
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SetfilteredResto(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //checking the online and offline cnnection
  const Onlinestatus=useOnlineStatus();
  if(Onlinestatus===false)
    return (
      <h1>opps!! You are offline please check your internet connection</h1>
    );

   
  //conditionalRendring)
  if (ListofRestaurants.length === 0) {
    return <Shimmer />;
  }
  return ListofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Filter flex">
        <div className="search m-2 p-2 flex">
          <input
            type="text"
            className="border border-solid border-black m-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              //console.log(searchText);
            }}
          ></input>
          <div>
          <button
          className="px-4 py-1 bg-orange-400 m-1 rounded-lg"
            onClick={() => {
              const filteredRestaurant = ListofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetfilteredResto(filteredRestaurant);
            }}
          >Search
          </button>
          </div>
          <div  className="px-8 py-1">
        <button
          className="border border-solid border-black px-1 py-1 bg-stone-400 rounded-lg "
          onClick={() => {
            const FilteredList = ListofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            SetfilteredResto(FilteredList);
          }}
        >
          Top rated Restaurant
        </button>
        </div>
        </div>
     
       
      </div>
      <div className="p-10  flex flex-wrap">
        {filteredResto.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if restaurant data is Promoted then you it */}
            {restaurant.info.promoted?(
              <ReaturantcardPromoted resdata={restaurant} />):(
            <Restrocard resdata={restaurant} />
              )}
          </Link>
        ))}

        {/* <Restrocard  resname="Mehgna Food"
          cuisine="dal chawal , North Indian, Asian" 
          rates="4.5 stars"
          time="30 min"
          /> */}
      </div>
    </div>
  );
};
export default Body;

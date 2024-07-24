import { CDN_URL } from "../utils/constants";
const Restrocard = (props) => {
    const{resdata}=props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        deliveryTime,
        avgRating
    } = resdata?.info;
    
  return (
    <div className="m-4 p-4 w-[230px] rounded-lg  bg-green-100 hover:bg-gray-300" >
      <img
        className="res-log w-[230px] h-[150px] rounded-lg m-1" 
        alt="food-logo"
        src={CDN_URL+resdata.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-1">{name}</h3>
      <h4>{cuisines.join(", ")}</h4> 
      <h4>{costForTwo}</h4>
      <h4>{ deliveryTime}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

// adding the higher order componet 
// input restaurantcard and output promtedRestaurantcard
 export const WithPromotedLabel=(Restrocard)=>{
return(props)=>{
  return(
  <div>
    <label>Promoted</label>
    <Restrocard{...props}/>
  </div>
  );
};
};

  export default Restrocard;
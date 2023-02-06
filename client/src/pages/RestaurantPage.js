import { Restaurant } from "../components/featuredPage/Restaurant";
import RestaurantData from "../restaurants.json";
import { useParams } from "react-router-dom";
import { MainSideNav } from "../components/sidenav/MainSideNav";


export const RestaurantPage = () => {
    let { id } = useParams();

    const restaurantArray = RestaurantData[0].restaurants;
    console.log(restaurantArray);
    return (
        <>
            <MainSideNav />
            {
                restaurantArray.map((restaurant,index) => {
                    if (restaurant.name === id) {
                        return (
                            <Restaurant mydata={restaurant} key={index}/>
                        )
                    }
                })
            }
        </>
    )
}
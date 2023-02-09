import '../../App.css';
import './Home.css';
import 'react-multi-carousel/lib/styles.css';
import { MainSideNav } from "../../components/sidenav/MainSideNav";
import { FeaturedPage } from '../../components/featuredPage/FeaturedPage';
import  RestaurantData from "../../restaurants.json";

export const Home = () => {
    let numRestaurants = RestaurantData[0].restaurants.length - 1;
    let rnum = Math.floor(Math.random() * numRestaurants)
    return (
        <>
            <MainSideNav />
            <FeaturedPage mydata={RestaurantData[0].restaurants[rnum]}/>
        </>
    )
}
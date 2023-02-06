import '../../App.css';
import './Home.css';
import 'react-multi-carousel/lib/styles.css';
import { MainSideNav } from "../../components/sidenav/MainSideNav";
import { FeaturedPage } from '../../components/featuredPage/FeaturedPage';
import  RestaurantData from "../../restaurants.json";

export const Home = () => {
    const featuredNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return (
        <>
            <MainSideNav />
            <FeaturedPage mydata={RestaurantData[0].restaurants[featuredNum]}/>
        </>
    )
}
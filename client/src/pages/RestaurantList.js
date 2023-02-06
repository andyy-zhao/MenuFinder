import '../App.css';
import 'react-multi-carousel/lib/styles.css';
import { MainSideNav } from "../components/sidenav/MainSideNav";
import { FeaturedPage } from "../components/featuredPage/FeaturedPage";

export const RestaurantList = () => {
    return (
        <>
            <MainSideNav />
            <FeaturedPage />
        </>
    )
}
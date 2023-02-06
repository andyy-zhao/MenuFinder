import { useState } from "react";
import { Rating } from '../rating/Rating';
import '../../App.css';
import '../../pages/home/Home.css';
import  RestaurantData from "../../restaurants.json";
import 'react-multi-carousel/lib/styles.css';
import { ImgCarousel } from "../imgCarousel/ImgCarousel";

export const Yunshang = () => {
    // const numCategories = RestaurantData[0].restaurants[0].menu.length;
    // console.log(numCategories)
    const [active, setActive] = useState("Appetizers");
    var appetizerImages = RestaurantData[0].restaurants[0].menu[0].appetizers;
    var ColdDishesImages = RestaurantData[0].restaurants[0].menu[1].coldDishes;
    var MainsImages = RestaurantData[0].restaurants[0].menu[2].mains;
    var DrinksImages = RestaurantData[0].restaurants[0].menu[3].drinks;

    return (
        <div className='hi'>
            <div className='menu-title'>
                Featured: {<br></br>} { RestaurantData[0].restaurants[0].name }
            </div>
            <Rating value={ RestaurantData[0].restaurants[0].rating }/>
            <div className='r-descr'>
                { RestaurantData[0].restaurants[0].location } <br></br>
                Business Hours Open{` `}
                { RestaurantData[0].restaurants[0].openHour } {` - `}
                { RestaurantData[0].restaurants[0].closeHour }
            </div>
            <div className="category-bars">
                <button className="category-btn" onClick={() => setActive("Appetizers")}>Appetizers</button>
                <button className="category-btn" onClick={() => setActive("Cold Dishes")}>Cold Dishes</button>
                <button className="category-btn" onClick={() => setActive("Mains")}>Mains</button>
                <button className="category-btn" onClick={() => setActive("Drinks")}>Drinks</button>
                {active === "Appetizers" && <ImgCarousel item={appetizerImages}/>}
                {active === "Cold Dishes" && <ImgCarousel item={ColdDishesImages}/>}
                {active === "Mains" && <ImgCarousel item={MainsImages}/>}
                {active === "Drinks" && <ImgCarousel item={DrinksImages}/>}
            </div>
        </div>
    )
}
import { useState } from "react";
import { Rating } from '../rating/Rating';
import '../../App.css';
import '../../pages/home/Home.css';
import { MainSideNav } from "../sidenav/MainSideNav";
import 'react-multi-carousel/lib/styles.css';
import { ImgCarousel } from "../imgCarousel/ImgCarousel";

export const FeaturedPage = (prop) => {
    console.log(prop);
    const [active, setActive] = useState(Object.keys(prop.mydata.menu[0])[0]);
    return (
        <div className='hi'>
            <MainSideNav />
            <div className='menu-title'>
            Featured: <br></br>{prop.mydata.name}
            </div>
            <Rating value={ prop.mydata.rating }/>
            <div className='r-descr'>
                { prop.mydata.location } <br></br>
                Business Hours Open{` `}
                { prop.mydata.openHour } {` - `}
                { prop.mydata.closeHour }
            </div>
            <div className="category-bars">
                <div>
                    {prop.mydata.menu.map((category, index) => {
                        let str = Object.keys(category)[0];
                        str = str.replace(/_/g, " ");
                        return (
                            <div key={index} className="single-line-btn">
                                <button className="category-btn" key={Object.values(category)[0]} onClick={() => setActive(Object.keys(category)[0])}>{str}</button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {prop.mydata.menu.map((category,index) => {
                        return (
                            <div key={index}>
                                {active === Object.keys(category)[0] && <ImgCarousel item={Object.values(category)[0]}/>}
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>

    )
}
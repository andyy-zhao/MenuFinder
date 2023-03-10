import { useState } from "react";
import { Rating } from '../rating/Rating';
import '../../App.css';
import '../../pages/home/Home.css';
import 'react-multi-carousel/lib/styles.css';
import { ImgCarousel } from "../imgCarousel/ImgCarousel";

// prop is a restaurant object.
// {mydata: {...}}
// mydata: {name: 'chungchun', location: "", rating: "", menu: []}
export const Restaurant = (prop) => {
    const [active, setActive] = useState(Object.keys(prop.mydata.menu[0])[0]);

    const btnElList = document.querySelectorAll('.category-btn');
    btnElList.forEach(btnEl => {
        btnEl.addEventListener('click', () => {
            document.querySelector('.special')?.classList.remove('special');
            btnEl.classList.add('special');
        });
    });

    return (
        <div className='hi'>
            <div className='menu-title-1'>
                {prop.mydata.name}
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
                                <button className="category-btn" onClick={() => setActive(Object.keys(category)[0])}>{str}</button>
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
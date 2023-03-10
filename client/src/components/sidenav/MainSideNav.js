import React from 'react';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../../styles.css"
import { useState } from 'react';
import { HomeSideNav } from './HomeSideNav';
import { CategorySideNav } from './CategorySideNav';

export const MainSideNav = () => {
    const [mainNav, setMainNav] = useState(true);

    const handleClick = () => {
        setMainNav(!mainNav);
    }

    return (
        <>
            {mainNav ? <HomeSideNav handleMain={handleClick} /> : 
            <CategorySideNav handleCategory={handleClick}/>}
        </>
    )   
}



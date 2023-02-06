import React from 'react';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../../styles.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomeSideNav } from './HomeSideNav';
import { CategorySideNav } from './CategorySideNav';

export const MainSideNav = () => {
    const navigate = useNavigate();
    const [mainNav, setMainNav] = useState(true);
    const [categoryNav, setCategoryNav] = useState(false);

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



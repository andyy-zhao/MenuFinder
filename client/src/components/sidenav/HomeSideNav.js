import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../../styles.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SearchModal } from '../modal/SearchModal';
import { CompareModal } from '../modal/CompareModal';
import { LuckyModal } from '../modal/LuckyModal';

export const HomeSideNav = ({handleMain}) => {
    const navigate = useNavigate();
    const [searchActive, setSearchActive] = useState(false);
    const [compareActive, setCompareActive] = useState(false);
    const [luckyActive, setLuckyActive] = useState(false);

    const handleSearch = () => {
        setSearchActive(!searchActive);
    }

    const handleCompare = () => {
        setCompareActive(!compareActive);
    }

    const handleLucky = () => {
        setLuckyActive(!luckyActive);
    }

    return (
        <>
            <SideNav className="my-sidenav" key="main">
                    <SideNav.Toggle className="sidenav-btn" />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home" onSelect={selected => {navigate('/' + selected)}}>
                            <NavIcon><i className='fa fa-fw fa-home' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText>Home</NavText>
                        </NavItem>
                        <NavItem eventKey="categories" key="mainCat" onSelect={handleMain}>
                            <NavIcon><i className='fa fa-cubes' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText>Categories</NavText>
                        </NavItem>
                        <NavItem eventKey="compare" onSelect={handleCompare}>
                            <NavIcon><i className='fa-solid fa-down-left-and-up-right-to-center' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText>Compare</NavText>
                        </NavItem>
                        <NavItem eventKey="feeling-lucky" onSelect={handleLucky}>
                            <NavIcon><i className='fa-solid fa-utensils' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText>I'm Feeling Lucky</NavText>
                        </NavItem>
                        <NavItem eventKey="search" onSelect={handleSearch}>
                            <NavIcon><i className='fa-solid fa-magnifying-glass' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText>Search Restaurants</NavText>
                        </NavItem>
                    </SideNav.Nav> 
            </SideNav>
            {searchActive && <SearchModal searchActive={searchActive} handleSearch={handleSearch}/>}
            {compareActive && <CompareModal compareActive={compareActive} handleCompare={handleCompare} />}
            {luckyActive && <LuckyModal luckyActive={luckyActive} handleLucky={handleLucky} />}
        </>
    )   
}
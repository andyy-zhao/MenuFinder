import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../../styles.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CategoryModal } from '../modal/CategoryModal';

export const CategorySideNav = ({ handleCategory }) => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [open, setOpen] = useState(true)
    const handleModalType = (type) => {
        setModal(true);
        setModalType(type);
    }

    const handleClose = () => {
        setModal(false);
    }

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <>
            <SideNav className="my-sidenav" key="categories" expanded={open} onToggle={handleToggle}>
                    <SideNav.Toggle className="sidenav-btn" />
                    <SideNav.Nav defaultSelected="category" id="second">
                        <NavItem eventKey="breakfast" key="break">
                            <NavIcon key="breakIcon"><i className='fa-solid fa-bacon' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText key="breakdesc">Breakfast</NavText>
                            <NavItem onSelect={() => handleModalType("Bagels")}>
                                <NavText>Bagels</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Donuts")}>
                                <NavText>Donuts</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Eggs")}>
                                <NavText>Eggs</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Pancakes")}>
                                <NavText>Pancakes</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Coffee")}>
                                <NavText>Coffee</NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="lunch" key="lunc">
                            <NavIcon key="luncIcon"><i className='fa-solid fa-burger' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText key="luncDesc">Lunch</NavText>
                            <NavItem onSelect={() => handleModalType("Burgers")}>
                                <NavText>Burgers</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Fries")}>
                                <NavText>Fries</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Tacos")}>
                                <NavText>Tacos</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Pizza")}>
                                <NavText>Pizza</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Sandwiches")}>
                                <NavText>Sandwiches</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Sushi")}>
                                <NavText>Sushi</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Rice + Meat")}>
                                <NavText>Rice + Meat</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Desserts")}>
                                <NavText>Desserts</NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="dinner" key="din">
                            <NavIcon key="dinIcon"><i className='fa-solid fa-utensils' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText key="dinDesc">Dinner</NavText>
                            <NavItem onSelect={() => handleModalType("Seafood")}>
                                <NavText>Seafood</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Pasta")}>
                                <NavText>Pasta</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Noodles")}>
                                <NavText>Noodles</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Chicken")}>
                                <NavText>Chicken</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Stea")}>
                                <NavText>Steak</NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="snacks" key="snac">
                            <NavIcon key="snacIcon"><i className='fa-solid fa-ice-cream' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText key="snacDesc">Snacks</NavText>
                            <NavItem onSelect={() => handleModalType("Ice Cream")}>
                                <NavText>Ice Cream</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Bakery")}>
                                <NavText>Bakery</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("On The Go")}>
                                <NavText>On The Go</NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="chinese" onSelect={() => handleModalType("Chinese")}>
                            <NavIcon ><i className='fa-solid fa-bowl-rice' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText>Chinese</NavText>
                        </NavItem>
                        <NavItem eventKey="drinks" key="drinc">
                            <NavIcon key="drincIcon"><i className='fa-solid fa-champagne-glasses' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText key="drincDesc">Drinks + Beverages</NavText>
                            <NavItem onSelect={() => handleModalType("Bubble Tea")}>
                                <NavText>Bubble Tea</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Alcoholic Drinks")}>
                                <NavText>Alcoholic Drinks</NavText>
                            </NavItem>
                            <NavItem onSelect={() => handleModalType("Juice")}>
                                <NavText>Juice</NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="home" key="goback" onSelect={handleCategory}>
                            <NavIcon key="drincIcon"><i className='fa-solid fa-chevron-left' style={{fontSize: "1.5em"}}></i></NavIcon>
                            <NavText key="drincDesc">Go Back</NavText>
                        </NavItem>

                    </SideNav.Nav> 
            </SideNav>
            {modal && <CategoryModal modalType={modalType} handleClose={handleClose} />}
        </>
    )   
}



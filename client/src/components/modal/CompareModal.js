import React, { useState, useEffect } from 'react';
import RestaurantData from "../../restaurants.json";
import Modal from 'react-bootstrap/Modal';
import '../../styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useNavigate } from "react-router-dom";

function getItemsList(restaurant) {
    let menuItems = [];
    for (let i = 0; i < restaurant.menu.length; i++) {
        console.log(Object.values(restaurant.menu[i])[0].length)
        let num = Object.values(restaurant.menu[i])[0].length
        for (let j = 0; j < num; j++) {
            menuItems.push(Object.values(restaurant.menu[i])[0][j])
        }
    }
    return menuItems;
}

function getMinCost(restaurant) {
    let minCost = Number.MAX_VALUE;
    for (let i = 0; i < restaurant.menu.length; i++) {
        console.log(Object.values(restaurant.menu[i])[0].length)
        let num = Object.values(restaurant.menu[i])[0].length
        for (let j = 0; j < num; j++) {
            let cost = Number(Object.values(restaurant.menu[i])[0][j].price.replace("$", ""))
            if (cost < minCost) {
                minCost = cost;
            }
        }
    }
    return minCost;
}

function getMaxCost(restaurant) {
    let maxCost = 0;
    for (let i = 0; i < restaurant.menu.length; i++) {
        console.log(Object.values(restaurant.menu[i])[0].length)
        let num = Object.values(restaurant.menu[i])[0].length
        for (let j = 0; j < num; j++) {
            let cost = Number(Object.values(restaurant.menu[i])[0][j].price.replace("$", ""))
            if (cost > maxCost) {
                maxCost = cost;
            }
        }
    }
    return maxCost;
}

export const CompareModal = ({compareActive, handleCompare}) => {
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected? "white": "red",
            backgroundColor: state.isSelected ? "#F15D58" : "",
        }),
        control: (baseStyles, state) => ({
            ...baseStyles,
            border: "1px solid red",
            boxShadow: "none",   
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = "opacity 300ms";
            return { ...provided, opacity, transition };
        }
    };
    const restaurants = [];
    for (let i = 0; i < RestaurantData[0].restaurants.length; i++) {
        restaurants.push(RestaurantData[0].restaurants[i]);
    }
    ;
    const [firstRestaurant, setFirstRestaurant] = useState(restaurants[0]);
    const [secondRestaurant, setSecondRestaurant] = useState(restaurants[0]);
    const menulist = getItemsList(restaurants[0]);
    const [firstItemsList, setFirstItemsList] = useState(menulist);
    const [secondItemsList, setSecondItemsList] = useState(menulist);
    const [firstItem, setFirstItem] = useState(firstItemsList[0]);
    const [secondItem, setSecondItem] = useState(secondItemsList[0]);

    const handleFirstRestaurantChange = (selectedOption) => {
        setFirstRestaurant(selectedOption);
        let list = getItemsList(selectedOption);
        setFirstItemsList(list);
    }
    const handleSecondRestaurantChange = (selectedOption) => {
        setSecondRestaurant(selectedOption);
        let list = getItemsList(selectedOption);
        setSecondItemsList(list);
    }

    const handleFirstItemChange = (selectedOption) => {
        setFirstItem(selectedOption);
    }

    const handleSecondItemChange = (selectedOption) => {
        setSecondItem(selectedOption);
    }

    let navigate = useNavigate();
    const routeChange1 = () => {
        let path = `/restaurant/${firstRestaurant.name}`;
        navigate(path);
        handleCompare();
    }

    const routeChange2 = () => {
        let path = `/restaurant/${secondRestaurant.name}`;
        navigate(path);
        handleCompare();
    }

    return (
        <Modal 
            show={compareActive} 
            onHide={handleCompare} 
            size="lg"
            className="compare-modal-main">
        <Modal.Header closeButton>
            <Modal.Title>
                    Compare    
                    <div className="compare-subtitle">
                        Compare Two Dishes From Any Restaurants
                    </div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-search-body">
            <Container className="main-compare-container">
                <Row>
                    <Col>
                        <h5>
                            Store
                        </h5>
                        <Select 
                            options={restaurants}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            defaultValue={restaurants[0]}
                            isSearchable={true}
                            isClearable={false}
                            isRtl={false} 
                            styles={customStyles}
                            onChange={handleFirstRestaurantChange}
                        />
                        <br></br>
                        <h5>
                            Item
                        </h5>      
                        <Select 
                            options={firstItemsList}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            defaultValue={firstItemsList[0]}
                            isSearchable={true}
                            isClearable={false}
                            isRtl={false} 
                            styles={customStyles}
                            onChange={handleFirstItemChange}
                        />
                        <br></br>
                        <h5 className="food-item">
                            Food Item
                        </h5>
                        <Zoom>
                            <img src={firstItem.image} className="compare-img"/>
                        </Zoom> 
                        <h6 className="compare-img-desc">
                            {firstItem.price} {firstItem.pcs != "" && ` (` + firstItem.pcs + `)`}
                            <button className="compare-btn" onClick={routeChange1}>Visit Page</button>
                        </h6>
                    </Col>
                    <Col>
                        <h5>
                            Store
                        </h5>
                        <Select 
                            options={restaurants}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            defaultValue={restaurants[0]}
                            isSearchable={true}
                            isClearable={false}
                            isRtl={false} 
                            styles={customStyles}
                            onChange={handleSecondRestaurantChange}
                        />
                        <br></br>
                        <h5>
                            Item
                        </h5>      
                        <Select 
                            options={secondItemsList}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            defaultValue={secondItemsList[0]}
                            isSearchable={true}
                            isClearable={false}
                            isRtl={false} 
                            styles={customStyles}
                            onChange={handleSecondItemChange}
                        />
                        <Zoom>
                            <img src={secondItem.image} className="compare-img2"/>
                        </Zoom>
                        <h6 className="compare-img-desc">
                            {secondItem.price} {secondItem.pcs != "" && ` (` + secondItem.pcs + `)`}
                            <button className="compare-btn" onClick={routeChange2}>Visit Page</button>
                        </h6>
                    </Col>
                    <hr style={{marginTop: "2rem"}}></hr>
                </Row>
                <Row>
                    <Col>
                        <h5 className="compare-location">
                            Location
                        </h5>
                        <div className="location1">
                            {firstRestaurant.location}
                        </div>
                        
                    </Col>
                    <Col>
                        <div className="location2">
                            {secondRestaurant.location}
                        </div>
                    </Col>
                    <hr style={{marginTop: "2rem"}}></hr>
                    <br></br>               
                </Row>
                <Row>
                    <Col>
                        <h5 className="compare-location">
                            Open Hours
                        </h5>
                        <div className="hour1">
                            {firstRestaurant.openHour} - {firstRestaurant.closeHour}
                        </div>
                        
                    </Col>
                    <Col>
                        <div className="hour2">
                            {secondRestaurant.openHour} - {secondRestaurant.closeHour}
                        </div>
                    </Col>
                    <hr style={{marginTop: "2rem"}}></hr>
                    <br></br>               
                </Row>
                <Row>
                    <Col>
                        <h5 className="compare-location">
                            Cost Range
                        </h5>
                        <div className="hour1">
                        ${getMinCost(firstRestaurant)} - ${getMaxCost(firstRestaurant)}
                        </div>
                        
                    </Col>
                    <Col>
                        <div className="hour2">
                            ${getMinCost(secondRestaurant)} - ${getMaxCost(secondRestaurant)}
                        </div>
                    </Col>
                    <hr style={{marginTop: "2rem"}}></hr>
                    <br></br>               
                </Row>
            </Container>
        </Modal.Body>
        </Modal>
    );
}
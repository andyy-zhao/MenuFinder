import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../styles.css';
import { LuckyCard } from './LuckyCard';
import RestaurantData from "../../restaurants.json";

export const LuckyModal = ({luckyActive, handleLucky}) => {

    let numRestaurants = RestaurantData[0].restaurants.length - 1;
    let featuredNum = Math.floor(Math.random() * numRestaurants);
    const [restaurant, setRestaurant] = useState(RestaurantData[0].restaurants[featuredNum])

    const shuffleCard = () => {
        let prevNum = featuredNum;
        featuredNum = Math.floor(Math.random() * numRestaurants);
        while (prevNum === featuredNum) {
            featuredNum = Math.floor(Math.random() * numRestaurants);
        }
        setRestaurant(RestaurantData[0].restaurants[featuredNum]);
    }
    
    return (
        <Modal show={luckyActive} onHide={handleLucky} className="lucky-modal-main" size="lg">
          <Modal.Header closeButton className="search-header">
            <Modal.Title>
                <div className="lucky-title">
                    Our Recommendation
                </div>
                <div className="lucky-subtitle">
                    Not Feeling It? Click Shuffle
                </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-search-body">
                <LuckyCard shuffleCard={shuffleCard} restaurant={restaurant}/>
            </Modal.Body>
        </Modal>
    );
}
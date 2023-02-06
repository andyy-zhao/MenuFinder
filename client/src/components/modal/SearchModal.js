import React, { useState, useEffect } from 'react';
import RestaurantData from "../../restaurants.json";
import Modal from 'react-bootstrap/Modal';
import '../../styles.css';

export const SearchModal = ({searchActive, handleSearch}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    // useEffect(() => {
    //     console.log("Search inside useEffect: ", searchInput);
    // }, [searchInput]);


    return (
      <>
        <Modal show={searchActive} onHide={handleSearch} className="main-modal">
          <Modal.Header closeButton className="search-header">
            <Modal.Title>
                <div className="search-title">
                    Search by food or restaurant
                </div>
                <div className="search-subtitle">
                    Displays foods you are looking for alongside other restaurants and compare that exact dish
                </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div className="main">
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchInput}
                    />
                </div>
            </div>
            <div>
                {/* {RestaurantData[0].restaurants.filter(restaurant =>
                    restaurant.name === searchInput).map(filteredRestaurant => (
                        console.log(filteredRestaurant.name)
                    ))} */}
                {RestaurantData[0].restaurants.filter(restaurant =>
                    restaurant.name === searchInput).map(filteredRestaurant => (
                        console.log(filteredRestaurant.name)
                    ))}
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}
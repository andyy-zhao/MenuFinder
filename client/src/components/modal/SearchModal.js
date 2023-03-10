import React, { useState } from 'react';
import RestaurantData from "../../restaurants.json";
import Modal from 'react-bootstrap/Modal';
import '../../styles.css';
import { SearchCard } from "./SearchCard";

export const SearchModal = ({searchActive, handleSearch}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }
    return (
      <>
        <Modal show={searchActive} onHide={handleSearch} className="main-search-modal" size="lg">
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
          <Modal.Body className="modal-search-body">
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
                {RestaurantData[0].restaurants.map((restaurant, index) => {
                    const itemArray = [];
                    restaurant.menu.map((category,index)=> {
                        Object.values(category)[0].filter(item => 
                            // item.name === searchInput
                            item.name.toLowerCase().includes(searchInput.toLowerCase())
                        ).map((filteredItem, index) => {
                            itemArray.push(filteredItem)
                            return (
                                <div key={index}>{itemArray[0].name}</div>
                            )
                        })
                        return null;
                    })
                    for (var i = 0; i < itemArray.length; i++) {
                        let item = itemArray[i];
                        return (
                            <SearchCard restaurant={restaurant} item={item} />
                        )
                    }
                    return null;
                })}

            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}
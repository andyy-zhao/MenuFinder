import React, { useState } from 'react';
import RestaurantData from "../../restaurants.json";
import Modal from 'react-bootstrap/Modal';
import '../../styles.css';

export const SearchModal = ({searchActive, handleSearch}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput);
    }

    return (
      <>
        <Modal show={searchActive} onHide={handleSearch} className="main-modal">
          <Modal.Header closeButton>
            <Modal.Title>Search by food</Modal.Title>
            <div>Quickly display the food you're looking for alongside other restaurants
                and compare that exact dish</div> 
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div>
                <input 
                    type="text"
                    placeholder="Search Here"
                    onChange={handleChange}
                    value={searchInput}
                />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}
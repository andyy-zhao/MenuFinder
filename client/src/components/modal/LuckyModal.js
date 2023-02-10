import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../styles.css';
import { LuckyCard } from './LuckyCard';

export const LuckyModal = ({luckyActive, handleLucky}) => {
    
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
                <LuckyCard />
            </Modal.Body>
        </Modal>
    );
}
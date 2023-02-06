import React, { useState } from 'react';
import navbarIcon from '../../assets/icons/navbarIcon.svg';
import './Sidebar.css';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="sidebar-toggle navbar1" onClick={() => setIsOpen(!isOpen)}>
        <img src={navbarIcon} alt="ICON" className="sidebar-icon"/>
      </button>
    </>
  );
};

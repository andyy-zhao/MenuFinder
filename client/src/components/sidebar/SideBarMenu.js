import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { useState } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import navbarIcon from '../../assets/icons/navbarIcon.svg';

export const SideBarMenu = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div style={{ display: 'flex', width: '10%' }}>
            <Sidebar className="sidebar">
                <Menu>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                </Menu>
            </Sidebar>

            <button className="sidebar-toggle navbar1" onClick={() => collapseSidebar()}>
                <img src={navbarIcon} alt="ICON"/>
            </button>

        </div>
    );
  };
  
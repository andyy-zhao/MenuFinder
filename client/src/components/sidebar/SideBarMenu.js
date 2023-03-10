import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
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
  
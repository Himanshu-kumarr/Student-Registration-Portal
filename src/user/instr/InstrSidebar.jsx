import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './InstrSidebar.css';

const Sidebar = ({isOpen, setIsOpen, barClicked}) => {

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`} onMouseEnter={() => (barClicked ? (null):setIsOpen(true))} onMouseLeave={() => (barClicked ? (null):setIsOpen(false))}>
            <div className="university-logo sidebar-item">
                <img src="/university-logo.jpg"/>
                <span>Academic Section, U'sN</span>
            </div>
            <div className="sidebar-item">
                <img src="user-profile.png"/>
                <span>Profile</span>
            </div>
            <div className="sidebar-item">
                <img src="calendar-3.png"/>
                <span>Academic Home</span>
            </div>
            <div className="sidebar-item">
                <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" />
                <span>Logout</span>
            </div>
        </div>
    );
};

export default Sidebar;

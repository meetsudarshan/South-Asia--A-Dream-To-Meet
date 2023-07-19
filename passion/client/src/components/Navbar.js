import React, { useState } from 'react';
import '../components/Navbar.css';
import Home from '../Pages/Home';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav className="Navbar">
        <ul className="Navbar-nav">
          <li className={`NavItem ${activeTab === 'home' ? 'active' : ''}`}>
            <button className="NavLink" onClick={() => handleTabClick('home')}>
              Home
            </button>
          </li>
          <li className={`NavItem ${activeTab === 'about' ? 'active' : ''}`}>
            <button className="NavLink" onClick={() => handleTabClick('about')}>
              About
            </button>
          </li>
          <li className={`NavItem ${activeTab === 'contact' ? 'active' : ''}`}>
            <button className="NavLink" onClick={() => handleTabClick('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <div className="Content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <h1>About Page Content</h1>}
        {activeTab === 'contact' && <h1>Contact Page Content</h1>}
      </div>
    </div>
  );
};

export default Navbar;

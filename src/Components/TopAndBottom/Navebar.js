import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import navicon from '../Image/Navlogo.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "About Us",
      dropdown: [
        { label: "Who We Are", path: "/whoweare" },
        { label: "Vision, Mission, Value", path: "/mission" },
        { label: "Advisory Board", path: "/advisoryboard" },
      ],
    },
    {
      label: "Services",
      dropdown: [
        { label: "Center of Excellence", path: "/centreofexcellence" },
        // { label: "Research Program", path: "/researchprogram" },
        { label: "Training & Certifications", path: "/termsandconditions" },
        {
          label: "Faculty Development Programs (FDP)",
          path: "/facultydevelopmentprogram",
        },
        { label: "Educational Awards-2024", path: "/educationalaward" },
        {
          label: "Publications",
          submenus: [
            { label: "Digital Magazine", path: "/digitalmagazine" },
            {
              label: "Hardcopy Magazine",
              path: "/hardcopymagazine",
            },
          ],
        },
        {
          label: "Event",
          submenus: [
            { label: "Conferences", path: "/confrence" },
            { label: "Summits", path: "/summit" },
          ],
        },
        { label: "Bharat Talks", path: "/bharattalk" },
        { label: "International Collaborations", path: "/internationalcollo" },
        // {
        //   label: "Startup Innovation Hub",
        //   submenus: [
        //     { label: "Mentoring", path: "/mentoring" },
        //     { label: "Funding", path: "/contact/support/customer-service" },
        //   ],
        // },
        { label: "Atal Lab Training Centers", path: "/atalab" },
      ],
    },
    { label: "News & Updates", path: "/news" },
    {
      label: "Resources",
      dropdown: [
        { label: "Blog", path: "/blog" },
        // { label: "Case Study", path: "/casestudies" },
        { label: "White Papers", path: "/whitepapers" },
        { label: "Privacy & Policy", path: "/privacy" },
      ],
    },
  ];

  return (
    <nav className="navbar">

      <div>
        <Link to="/">
        <img src={navicon} className="navlogo"/>  
        </Link>
       
      </div>

      <div className="Nav-bar">
        <ul className="nav-menu">
          
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => handleDropdownToggle(index)}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavLink exact to={item.path} className="nav-link">
                {item.label}
              </NavLink>
              {item.dropdown && activeDropdown === index && (
                <ul className="dropdown">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <li
                      key={dropdownIndex}
                      className="dropdown-item"
                      onMouseEnter={() =>
                        dropdownItem.submenus &&
                        handleSubmenuToggle(dropdownIndex)
                      }
                      onMouseLeave={() => handleSubmenuToggle(null)}
                    >
                      <NavLink to={dropdownItem.path} className="dropdown-link">
                        {dropdownItem.label}
                        {dropdownItem.submenus && (
                          <FontAwesomeIcon
                            className="icon-1"
                            icon={
                              activeSubmenu === dropdownIndex
                                ? faAngleDown
                                : faAngleRight
                            }
                          />
                        )}
                      </NavLink>
                      {dropdownItem.submenus &&
                        activeSubmenu === dropdownIndex && (
                          <ul className="submenu">
                            {dropdownItem.submenus.map(
                              (submenuItem, submenuIndex) => (
                                <li key={submenuIndex} className="submenu-item">
                                  <NavLink
                                    to={submenuItem.path}
                                    className="submenu-link"
                                  >
                                    {submenuItem.label}
                                  </NavLink>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>


      <div className="Mobile-view"  >

      <div className="navBar" >

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="cross">&#10005;</span>  
        ) : (
          <span className="hamburger-icon">&#9776;</span> 
        )}
      </div>

      {/* Navigation Links (shown when menu is open) */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
        <div className="Nav-bar-mobile" >
        <ul className="nav-menu-mobile">
          
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="nav-item"

              onMouseEnter={() => handleDropdownToggle(index)}
              onMouseLeave={() => handleDropdownToggle(null)}
            >
              <NavLink exact to={item.path}  className="nav-link">
                {item.label}
              </NavLink>
              {item.dropdown && activeDropdown === index && (
                <ul className="dropdown">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <li
                      key={dropdownIndex}
                      className="dropdown-item"
                      onMouseEnter={() =>
                        dropdownItem.submenus &&
                        handleSubmenuToggle(dropdownIndex)
                      }
                      onMouseLeave={() => handleSubmenuToggle(null)}
                    >
                      <NavLink to={dropdownItem.path} className="dropdown-link">
                        {dropdownItem.label}
                        {dropdownItem.submenus && (
                          <FontAwesomeIcon
                            className="icon-1"
                            icon={
                              activeSubmenu === dropdownIndex
                                ? faAngleDown
                                : faAngleRight
                            }
                          />
                        )}
                      </NavLink>
                      {dropdownItem.submenus &&
                        activeSubmenu === dropdownIndex && (
                          <ul className="submenu">
                            {dropdownItem.submenus.map(
                              (submenuItem, submenuIndex) => (
                                <li key={submenuIndex} className="submenu-item">
                                  <NavLink
                                    to={submenuItem.path}
                                    className="submenu-link"
                                    
                                  >
                                    {submenuItem.label}
                                  </NavLink>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
        </ul>
      </div>
    </div>
     
      </div>
     
    </nav>
  );
};

export default Navbar;

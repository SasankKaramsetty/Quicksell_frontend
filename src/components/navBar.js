import { useState, useRef, useEffect } from 'react';
import '../styles/navBar.css';
import Display from '../assets/Display.svg';
import down from '../assets/down.svg'; 

const NavBar = ({ setGrouping, setOrdering }) => {
    const [selectedGrouping, setSelectedGrouping] = useState(localStorage.getItem('grouping') || 'status');
    const [selectedOrdering, setSelectedOrdering] = useState(localStorage.getItem('ordering') || 'priority');
    const [displayOpen, setDisplayOpen] = useState(false); 
    const dropdownRef = useRef(null); 
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDisplayOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    function handleGroupingChange(event) {
        setSelectedGrouping(event.target.value);
        setGrouping(event.target.value);
        localStorage.setItem('grouping', event.target.value);
    }

    function handleOrderingChange(event) {
        setSelectedOrdering(event.target.value);
        setOrdering(event.target.value);
        localStorage.setItem('ordering', event.target.value);
    }

    return (
        <nav className="navbar">
            <ul className="navbarmenu" ref={dropdownRef}>
                <li className="dropdown">
                    <button className="dropbtn" onClick={() => setDisplayOpen(!displayOpen)}>
                        <img src={Display} alt="Display Icon" className="displayicon" /> Display 
                        <img src={down} alt="Down Icon" className="downicon" />
                    </button>
                    {displayOpen && (
                        <ul className="dropdowncontent">
                            <li className="dropdownsection">
                                <span className="dropdownlabel">Grouping</span>
                                <div className="subdrop">
                                    <select value={selectedGrouping} onChange={handleGroupingChange}>
                                        <option value='status'>Status</option>
                                        <option value='userId'>User</option>
                                        <option value='priority'>Priority</option>
                                    </select>
                                </div>
                            </li>
                            <li className="dropdownsection">
                                <span className="dropdownlabel">Ordering</span>
                                <div className="subdrop">
                                    <select value={selectedOrdering} onChange={handleOrderingChange}>
                                        <option value='priority'>Priority</option>
                                        <option value='title'>Title</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

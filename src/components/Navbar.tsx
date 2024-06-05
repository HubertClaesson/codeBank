import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";




const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false);
    const [hide, setHide] = useState(window.innerWidth);

    const toggleNavigation = () => {
        setToggleNav(!toggleNav)
    }

    useEffect(() => {
        const handleScreenWidth = () => {
            setHide(window.innerWidth)
        };

        window.addEventListener('resize', handleScreenWidth);

        return () => {
            window.removeEventListener('resize', handleScreenWidth);
        };
    }, [toggleNav]);

    return (
        <>
            <div className="navContainer">
                <div className="logo-container">
                    <i className="bi bi-pie-chart"></i>
                </div>
                < menu className="mobilenNavButton" onClick={toggleNavigation}>
                    <i className="bi bi-backpack2"></i>
                </menu>
                <nav className={`align-self ${toggleNav ? "show" : ""}`}>
                    <menu className={`mobilenNav ${hide > 450 ? "show" : ""}`}>
                        <li><NavLink onClick={() => toggleNavigation()} className={({ isActive }) => isActive ? "active" : ""} to='/'>Hem</NavLink></li>
                        <li><NavLink onClick={toggleNavigation} className={({ isActive }) => isActive ? "active" : ""} to='/cards'>Cards</NavLink></li>
                        <li><NavLink onClick={toggleNavigation} className={({ isActive }) => isActive ? "active" : ""} to='/hero'>Hero sektion</NavLink></li>
                    </menu>
                </nav >
            </div>

        </>
    )
}

export default Navbar;
import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand fs-3" href="#">GET SMART</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ms-3 ">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ms-3  ">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item ms-3  ">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link ">Disabled</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link "> <FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    );
};

export default NavBar;
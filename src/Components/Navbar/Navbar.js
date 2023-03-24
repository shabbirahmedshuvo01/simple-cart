import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success-subtle">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' to="cart">Cart</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
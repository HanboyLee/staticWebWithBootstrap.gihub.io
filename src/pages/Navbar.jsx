import React from 'react';
import './Navbar.scss';
const Navbar = () => {
    const [show, setShow] = React.useState(false);

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark text-light fixed-top">
            <div className="container">
                <a href="#home" className="navbar-brand">
                    網頁構建
                </a>
                <button type="button" className="navbar-toggler" onClick={() => setShow((prev) => !prev)}>
                    {' '}
                    <span className="navbar-toggler-icon"></span>{' '}
                </button>
                <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#knowledge" className="nav-link">
                                學習知識
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#how" className="nav-link">
                                成為理想職業
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#instructors" className="nav-link">
                                中心師資
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

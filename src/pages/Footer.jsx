import React from 'react';

const Footer = () => {
    return (
        <footer className="p-2 bg-dark text-light text-center position-relative">
            <div className="container">
                <p className="lead">Copyright &copy; 2022 前端訓練中心</p>
                <a href="#frondend">
                    <i className="bi bi-arrow-up-circle-fill position-absolute end-0 bottom-0 pe-3 h1"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

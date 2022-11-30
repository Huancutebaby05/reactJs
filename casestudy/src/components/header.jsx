import React from 'react'
import { FaFacebookF,FaInstagram,FaGooglePlusG,FaTwitter,FaRss,FaSearch,FaHeart,FaShoppingCart } from "react-icons/fa"

function Header() {
    return (
        <header id="header" className="header row m-0 p-0 w-100 mb-5">
            <div className="logo col-10 col-lg-5 col-xl-5 text-center">
                <div className="row m-0">
                    <a href="#header" className="col-3 p-0 text-end">
                    <img className="logo-img" src={require('../public/img/logo.png')} />
                        </a>
                    <div className="social col-9 p-0 ">
                        <div className="row">
                            <a href="#header" className="logo-name text-decoration-none">
                                <h1 className=" text-center mb-0">Animate store</h1>
                            </a>
                            <nav className="nav nav-fill d-flex">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/truongnv97.haui/" title="Facebook"
                                        target="_blank"><FaFacebookF/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://twitter.com/Truong70942537" title="Twitter"
                                        target="_blank"><FaTwitter/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.instagram.com/vitconlonton1997/"
                                        title="Instagram"><FaInstagram/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.google.com/" title="Facebook"><FaGooglePlusG/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FaRss/></a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- nav bar and search button` --> */}
            <div className="container-fluid col-2 col-lg-7 col-xl-6 offset-xl-1 mt-3 ">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse row m-0 justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav col-12 ">
                            <li className="nav-item">
                                <a className="nav-link" href="././main.html">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="./miku.html">SPECIALS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CATEGORIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">COMIC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ANIME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item" id="loginId">

                            </li>
                        </ul>
                        <form className="search col-12 ps-2 pt-2">
                            <div className="d-flex">
                                <div className="form-check-inline ps-0">
                                    <div className="input-group ">
                                        <input className="form-control text-dark " type="text" name="" id=""
                                            placeholder="Tap here to search..."/>
                                            <div className="input-group-text ms-0 text-white ">
                                                <FaSearch/>
                                            </div>
                                    </div>
                                </div>
                                <a href="./cart.html" target="_blank" className="icon icon1 me-2 text-decoration-none text-white">
                                    <div className="cart-list">
                                        <i><FaShoppingCart/></i>Cart
                                        <span id="cart-add"
                                            className="position-absolute  translate-middle badge rounded-pill text-danger bg-light"></span>
                                    </div>
                                    <div id="cart-list-display">
                                        <div className="d-flex flex-row cart-list-item">
                                            <p className="title">Cart rỗng</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="icon ms-4 text-decoration-none text-white">
                                    <i><FaHeart/></i>Yêu thích
                                    <span id="cart-love"
                                        className="position-absolute text-danger bg-light translate-middle badge rounded-pill "></span>
                                </a>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
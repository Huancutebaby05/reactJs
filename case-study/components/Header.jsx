import React from 'react'

function Header() {
    return (
        <header id="header" className="header row m-0 p-0 w-100">
            <div className="logo col-10 col-lg-5 col-xl-5 text-center">
                <div className="row m-0">
                    <a href="#header" className="col-3 p-0 text-end"><img className="logo-img" src="../public/img/logo.png" alt=""/></a>
                    <div className="social col-9 p-0 ">
                        <div className="row">
                            <a href="#header" className="logo-name text-decoration-none">
                                <h1 className=" text-center">Animate store</h1>
                            </a>
                            <nav className="nav nav-fill d-flex">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/truongnv97.haui/" title="Facebook"
                                        target="_blank"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://twitter.com/Truong70942537" title="Twitter"
                                        target="_blank"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.instagram.com/vitconlonton1997/"
                                        title="Instagram"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.google.com/" title="Facebook"><i
                                        className="fab fa-google-plus-g"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-rss"></i></a>
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
                                <div className="form-check-inline ps-0 flex-grow-1">
                                    <div className="input-group ">
                                        <input className="form-control text-dark " type="text" name="" id=""
                                            placeholder="Tap here to search..."/>
                                            <div className="input-group-text">
                                                <i className="fa-solid fa-search text-white"></i>
                                            </div>
                                    </div>
                                </div>
                                <a href="./cart.html" target="_blank" className="icon icon1 me-2 mt-2">
                                    <div className="cart-list">
                                        <i className="fa-solid fa-cart-shopping"></i>Cart
                                        <span id="cart-add"
                                            className="position-absolute  translate-middle badge rounded-pill text-danger bg-light"></span>
                                    </div>
                                    <div id="cart-list-display">
                                        <div className="d-flex flex-row cart-list-item">
                                            <p className="title">Cart rỗng</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="icon ms-4 mt-2">
                                    <i className="fas fa-heart "></i>Yêu thích
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
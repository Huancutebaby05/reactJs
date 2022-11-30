import React from 'react'

function Footer() {
    return (
        
            <footer className="container-fluid ">
            <div className="container-fluid  ">
                <h2 className="text-center">Stay Updated</h2>
                <h6 className="text-center ">Sign up for our newsletter to receive the latest news and event postings.
                </h6>
                <div className="input-group mx-auto w-50" >
                    <input type="email" className="form-control" placeholder="YOUR EMAIL ADDRESS"/>
                        <div className="">
                            <button className=" ml-2" type="submit">SIGN UP</button>
                        </div>
                </div>
            </div>
            <div className="container">
                <h2 className="logo text-center">Animate store</h2>
                <nav className="nav nav-fill mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fab fa-google-plus-g"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fas fa-rss"></i></a>
                    </li>
                </nav>
            </div>
            <div className="copyright ">
                <p className="text-center">&copy; 2019 <a href="#" className="text-white">Animate store</a>. All Rights
                    Reserved.
                    Design
                    by <a href="#" target="_blank" className="text-white">Truong</a>.</p>
            </div>
        </footer>
        
    )
}

export default Footer
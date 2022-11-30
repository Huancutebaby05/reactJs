import React from 'react'
import Header from "./../components/header"
import Footer from "./../components/footer";
import { FaArrowUp } from "react-icons/fa"
import Product from '../components/layout/cart';
import { useEffect, useState } from "react";
import axios from "axios";


function Main() {
    // const [products, setProducts] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3001/products`).then((res) => {
            console.log(res.data.newArrival);
            let productList = []

            // setProducts({ ...products, res.data })
            console.log("this is " + products);
        }).catch((err) => console.error(err))
    }, [])
    const products = {
        "id": 1,
        "link": "../../public/img/new-product/new-11.jpg",
        "title": "[Zoku Kono Subarashii Sekai Ni Bakuen Wo!]",
        "description": "Iris: Light Novel Band of Thieves",
        "price": "$194.49"
    }
    return (
        <div>
            <Header />

            <Product products={products} />

            <div id="notification">
                <div className="">
                    <h2 className="">Store Notification</h2>
                    <div className="row m-0 text-start">
                        <div className="notify col-lg-4 col-12">
                            <h5 className="text-primary text-opacity-75 m-0">COVID -19 Notification.</h5>
                            <p className="date fs-6 mb-2">
                                2022/2/6 - 3/15
                            </p>
                            <p>Our associates and you, our lovely customers, are at the heart of the TK Maxx family, and to help
                                prevent the spread of COVID-19 virus, we decided to temporarily close our TK Maxx and Homesense
                                stores on 19th March. As the situation has unfolded, we have made the decision to temporarily
                                stop taking orders online from today 26th March at tkmaxx.com as well," the company's chief
                                executive Louise Greenlees explained. </p>
                            <span className="text-primary text-opacity-75 ps-2">Read more -&gt; </span>
                        </div>
                        <div className=" notify col-lg-4 col-12">
                            <h5 className="text-primary text-opacity-75 m-0">Who is Lucky Customer</h5>
                            <p className="date fs-6 mb-2">
                                2022/2/6 - 3/15
                            </p>
                            <p>Every week we decide to choose one lucky customer to receive a special gift from the store. To
                                participate when making a purchase, please fill out our survey according to the instructions of
                                the staff. The list of winners will be announced on the following Monday, below is the list of
                                winners for the week of May 24 - June 1.</p>
                            <span className="text-primary text-opacity-75 ps-2">Read more --&gt;</span>
                        </div>
                        <div className="notify col-lg-4 col-12">
                            <h5 className="text-primary text-opacity-75 m-0"> Beautiful 8-3 Gif</h5>
                            <p className="date fs-6 mb-2">
                                2022/2/6 - 3/15
                            </p>
                            <p>To celebrate March 8th, we decided to offer 10% discount on all items when purchased in-store and
                                5% for customers ordering online. Especially for loyal customers we will give free gift wrapping
                                for all items.</p>
                            <span className="text-primary text-opacity-75 ps-2">Read more --&gt; </span>
                        </div>
                    </div>
                    <button> See All </button>
                </div>
            </div>
            {/* <!-- notification end --> */}
            <hr className="mx-auto" />
            {/* <!-- about us start --> */}
            <div id="about-us">
                <h4 >Animate@jp.com </h4>
                <div className="feedback">
                    <div className="user">
                        <div className="user-top">
                            <div className="user-avt">
                                <img src={require("../public/img/new-product/new-12.jpg")} alt="" />
                            </div>
                            <div className="user-infor">
                                <p className="user-name">Nguyet nhi<i className="fab fa-weibo"></i></p>
                                <small>@yueer.3/13</small>
                            </div>
                        </div>
                        <div className="fb-content">
                            <p>With #esports set to debut in this year's #AsianGames with a total of 8 medal events, the latest
                                #AntKast episode features League of Legends host, Wendy Shi
                                @Wendy5544
                            </p>
                            <img src={require("../public/img/miku.gif")} alt="" />
                        </div>
                    </div>

                    <div className="user">
                        <div className="user-top">
                            <div className="user-avt">
                                <img src={require("../public/img/new-product/new-12.jpg")} alt="" />
                            </div>
                            <div className="user-infor">
                                <p className="user-name">Nguyet nhi<i className="fab fa-weibo"></i></p>
                                <small>@yueer.3/13</small>
                            </div>
                        </div>
                        <div className="fb-content">
                            <p>With #esports set to debut in this year's #AsianGames with a total of 8 medal events, the latest
                                #AntKast episode features League of Legends host, Wendy Shi
                                @Wendy5544
                            </p>
                            <img src={require("../public/img/miku.gif")} alt="" />
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-top">
                            <div className="user-avt">
                                <img src={require("../public/img/new-product/new-12.jpg")} alt="" />
                            </div>
                            <div className="user-infor">
                                <p className="user-name">Nguyet nhi<i className="fab fa-weibo"></i></p>
                                <small>@yueer.3/13</small>
                            </div>
                        </div>
                        <div className="fb-content">
                            <p>With #esports set to debut in this year's #AsianGames with a total of 8 medal events, the latest
                                #AntKast episode features League of Legends host, Wendy Shi
                                @Wendy5544
                            </p>
                            <img src={require("../public/img/miku.gif")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <a href="#notification" className="head-page">
                <i><FaArrowUp /></i>
            </a>
        </div>
    )
}

export default Main
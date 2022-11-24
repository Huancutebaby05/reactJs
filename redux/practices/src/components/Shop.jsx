import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllProducts } from "./../redux/Actions";

function Shop() {
    // const [productList, setProductList] = useState([])
    // const [cart, setCart] = useState([])
    const dispatch = useDispatch()
    // const abc = useSelector()
    const store = useSelector(state => state.myReducer)
    const cart = store.cart
    const productList = store.productList
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const handleClick = (e) => {
        dispatch(addToCart(e))
    }
    return (
        <div className='container pt-3'>
            <h2>SHOP</h2>
            <table className='table table-hover table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Inventory</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.inventory}</td>
                            <td><button className='btn btn-warning' onClick={() => handleClick(product)}>Add to cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <h2>Cart</h2>
            <table className='table table-hover table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.count ? product.count : 0}</td>
                            <td>{product.price * product.count}</td>
                        </tr>
                    ))}
                {/* <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total : {cart.map(product => {
                       let total = 0
                        total +=(Number(product.price) * product.count)
                        return total
                    })}</td>
                </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Shop
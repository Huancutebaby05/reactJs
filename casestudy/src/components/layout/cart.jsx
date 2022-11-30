import React from 'react'

function Product(products) {
    const addCartHandle = () => {
        
    }
    const likeHandle = () => {

    }
    return (
        <div className='container pt-3'>
            <div className="product-heading d-flex justify-content-between">
                <h3>
                    <span className="fw-bold fs-2">
                        |</span>
                    {/* {products} */}
                </h3>
                <p className="me-2 align-self-center "><a className=" " href="#">See more...</a> </p>
            </div>

            <div className="card" >
                <div className="card-body">
                    {/* <img className="product-img w-100" src={require(products.link)} alt="" /> */}
                    <p className="card-title">{products.title}</p>
                    <p className="card-text">{products.description}</p>
                    <p className="py-2 fw-bold money price">
                        {products.price}
                    </p>
                    <div className="product-bottom">
                    <button className="add" onClick={addCartHandle}>Add</button>
                    <button className="like" onClick={likeHandle}> <i className="fas fa-heart"></i>Like </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product
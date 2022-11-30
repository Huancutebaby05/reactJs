import React from 'react'

function ProductLayout(products) {
    return (
        <div className='container pt-3'>
            <div class="product-heading d-flex justify-content-between">
                <h3>
                    <span class="fw-bold fs-2">
                        |</span>
                    {products}
                </h3>
                <p class="me-2 align-self-center "><a class=" " href="#">See more...</a> </p>
            </div>

            <div class="card" >
                <div class="card-body">
                    <img class="product-img w-100" src={products.link} alt="" />
                    <p class="card-title">{products.title}</p>
                    <p class="card-text">{products.describe}</p>
                    <p class="py-2 fw-bold money price">
                        {products.price}
                    </p>
                    <div class="product-bottom">
                    <button class="add" onClick={() => addCartHandle}>Add</button>
                    <button class="like" onClick={() => likeHandle}> <i class="fas fa-heart"></i>Like </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLayout
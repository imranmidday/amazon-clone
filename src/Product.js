import React from 'react';
import "./Product.css";

function Product({id,title,image,price,rating}) {
    return (
        <div className="product">
            <div className="Product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) =>(
                            <p>⭐</p>
                        ))
                    }  
                </div>
                <img src={image} alt=""/>
                <button>Add To Basket</button>
            </div>       
        </div>
    )
}

export default Product

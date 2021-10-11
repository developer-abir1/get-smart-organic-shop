import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    console.log(props);
    const { name, picture, price, _id } = props.pd;
    const { handleAddProduct } = props;
    return (
        <div>

            <div className="product-card">
                <div className="product-img">
                    <img src={picture} alt="" />
                </div>
                <div className="mt-2">
                    <h3 className="text-uppercase">{name}</h3>
                    <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia ipsam ducimus nesciunt alias corrupti soluta inventore nisi commodi voluptate explicabo placeat, adipisci ipsum sit modi quaerat? Quia, nesciunt libero.</p>
                    <h4>Price: {price}</h4>

                </div>
                <div>
                    <button onClick={() => handleAddProduct(props.pd)} className="card-btn">Add to Card</button>
                </div>
            </div>

        </div>
    );
};

export default Product;
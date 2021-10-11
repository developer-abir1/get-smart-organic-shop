import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'

const ProductCard = (props) => {
    const { cart } = props;
    const totalQuantity = cart.reduce((previous, item) => previous + item.quantity, 0);
    const totalPrice = cart.reduce((previous, item) => previous + item.price * item.quantity, 0);


    return (
        <div className="card-product">
            <div className="text-center p-2">
                <div>
                    <a className="fs-4  " href="">   <FontAwesomeIcon icon={faShoppingBasket} /></a>
                </div>
                <div>
                    <p className="m-0">Item: {totalQuantity}</p>
                    <p className="m-0">TK: {totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
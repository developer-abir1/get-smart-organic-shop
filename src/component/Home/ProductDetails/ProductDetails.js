import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductDetails.css'
const ProductDetails = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/871c090e-e10d-4870-8918-713fcc20ec57')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(props)
    const { id } = useParams()

    const singleProduct = product.find(pd => pd._id == id);
    console.log(singleProduct)
    const { name, price, picture } = singleProduct;

    return (
        <div>


            <div className="single-product">
                <div className="product-img">
                    <img src={picture} alt="" />
                </div>
                <div className="mt-2">
                    <h3 className="text-uppercase">{name}</h3>
                    <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia ipsam ducimus nesciunt alias corrupti soluta inventore nisi commodi voluptate explicabo placeat, adipisci ipsum sit modi quaerat? Quia, nesciunt libero.</p>
                    <h4>Price: {price}</h4>
                    <button>Add Product</button>
                </div>

            </div>

        </div>
    );
};

export default ProductDetails;
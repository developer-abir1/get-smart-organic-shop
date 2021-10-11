import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../../LocalStore/LocalStore';
import Product from '../Product/Product';
import ProductCard from '../ProductCard/ProductCard';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/871c090e-e10d-4870-8918-713fcc20ec57')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    useEffect(() => {
        if (products.length) {
            const saveDb = getDb()
            const saveCard = []
            for (const item in saveDb) {
                const card = products.find(p => p._id === item);
                const quantity = saveDb[item];
                card.quantity = quantity

                saveCard.push(card);
                console.log(item, card)
            }
            setCart(saveCard)

        }


    }, [products])

    const handleAddProduct = (item) => {
        item.quantity = 1
        const newCart = [...cart, item]
        setCart(newCart)
        addToDb(item._id)


    }
    return (
        <section>
            <h1> Products</h1>
            <div className="total-product">
                {
                    products.map(pd => <Product
                        key={pd._id}
                        pd={pd}
                        handleAddProduct={handleAddProduct}

                    ></Product>)
                }
            </div>

            <div>
                <ProductCard cart={cart}></ProductCard>
            </div>
        </section>
    );
};

export default Shop;
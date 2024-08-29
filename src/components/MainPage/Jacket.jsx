import React, { useEffect, useState, Component } from 'react'
import axios from 'axios';

const Jacket = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://localhost:7270/PRODUCT/ListAll');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div className="container-items">
            {products.map((product) => (
                <div className="item" key={product.id}>
                    <figure>
                        <img src={`./images/product/${product.codigo}.jpg`} alt={product.nombre} />
                    </figure>
                    <div className="info-product">
                        <h2>{product.nombre}</h2>
                        <p className="price">${product.precio}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Jacket
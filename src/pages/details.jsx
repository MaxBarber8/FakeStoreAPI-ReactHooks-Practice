import { useState, useEffect } from 'react';

function Details(){
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => setProductData(json))
        .catch(error => console.log('Error:', error));
    }, []);

    return (
        <div>
            {productData.map(product => (
                <div key={product.id}>
                    <h2>{product.id}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Details;

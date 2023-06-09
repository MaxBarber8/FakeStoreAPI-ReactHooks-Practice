import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Products() {
    const params = useParams()
    const [productData, setProductData] = useState(undefined)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + params.id)
        .then(res => res.json())
        .then(json => setProductData(json))
        .catch(error => console.log('Error:', error));
    },[]);

    if(productData === undefined){
        return(<h1> Loading ... </h1>)
    }

    return(
        <div className="products">
            <img src={productData.image} width={200} />
            <h3> Title : {productData.title} </h3>
            <h2> Description : {productData.description} </h2>
        </div>
    )
    
}

export default Products;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectedCategory 
          ? `https://fakestoreapi.com/products/category/${selectedCategory}` 
          : 'https://fakestoreapi.com/products';
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [selectedCategory]);



  return (
    <div>
      <h1>Fake Store Products</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
              <h2 >{product.title}</h2>
              <p >{product.description}</p>
              <img src={product.image} alt={product.title}/>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
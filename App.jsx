import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

const products = [
  {
    "id": 1,
    "category": "shoes",
    "image": "shoe1.jpg",
    "name": "Hiker",
    "price": 94.95,
    "skus": [
      { "sku": "17", "size": 7 },
      { "sku": "18", "size": 8 }
    ],
    "description": "This rugged boot will get you up the mountain safely."
  },
  {
    "id": 2,
    "category": "shoes",
    "image": "shoe2.jpg",
    "name": "Climber",
    "price": 78.99,
    "skus": [
      { "sku": "28", "size": 8 },
      { "sku": "29", "size": 9 }
    ],
    "description": "Sure-footed traction in slippery conditions."
  },
  {
    "id": 3,
    "category": "shoes",
    "image": "shoe3.jpg",
    "name": "Explorer",
    "price": 145.95,
    "skus": [
      { "sku": "37", "size": 7 },
      { "sku": "38", "size": 8 },
      { "sku": "39", "size": 9 }
    ],
    "description": "Look stylish while stomping in the mud."
  }
]

export default function App() {
  const [ size, setSize ] = useState("");
  const [ name, setName ] = useState("");
  const [ id, setId ] = useState("");
  const [ description, setDescription ] = useState("");
  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <p>{p.description}</p>
        </a>
      </div> 
    );
  }
 
 // Ternary Operator practice to filter through the size. 
 
const filteredProducts = size ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size))) : products; 
// 1. If size number is selected by user
// 2. Filter through the list of object product sku's object's childrens and find if selected size matches the object's size and return true  
// 4. False - then return the original listed products. 

const filterByBrand = name ? products.filter((p) => p.name === name) : products;
// If the name is selected 
// Filter through each product where selected name equal === name and return true
// otherwise return original products 

const filterById = id ? products.filter((p) => p.id === parseInt(id)) : products;

// If the id is selected. 
// Filter through the array objects id and check if the selected id is equal to any id from id object. Return True 
// Else return the products 

const filterByDescription = description ? products.filter((p) => p.description.includes(description)) : products;
// If user want to look by the query 
// As user types in the words in the input Filter through all the objects description property and check if any words includes the user given words.  


  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
                <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                  <option value="">All sizes</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </section>
            <section id="products">{filteredProducts.map(renderProduct)}
          </section>

          <section id="filters">
            <label htmlFor="name">Filter by Brand:</label>{" "}
            <select id="name" value={name} onChange={(e) => setName(e.target.value)}>
              <option value="">All Type Categoory</option>
              <option value="Hiker">Hiker</option>
              <option value="Climber">Climber</option>
              <option value="Explorer">Explorer</option>
            </select>
          </section>
          <section id="products">{filterByBrand.map(renderProduct)}
       </section>

       <section id="filters">
            <label htmlFor="id">Filter by ID:</label>{" "}
            <select id="id" value={name} onChange={(e) => setId(e.target.value)}>
              <option value="">All By ID</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </section>
          <section id="products">{filterById.map(renderProduct)}
       </section>


       <section id="filters">
            <label htmlFor="description">Filter by Description:</label>{" "}
            <input placeholder="Search" id="description" value={description} type='text' onChange={(e) => setDescription(e.target.value)} />
          </section>
          <section id="products">{filterByDescription.map(renderProduct)}
       </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

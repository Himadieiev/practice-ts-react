import React, { FC, useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Product from "./models/Products";
import ProductsList from "./components/ProductsList/ProductsList";

const App: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (newProduct: Product) => {
    setProducts(products.map((product)=> product.id === newProduct.id ? newProduct : product));
  };

  const deleteProduct = (id:number) => {
    const newProductList = products.filter((product) => product.id !== id);
    setProducts(newProductList)
  }

  return (
    <div className="App">
      <div className="wrap">
        <h1 className="title">Our products</h1>
        <Form addProduct={addProduct} />
        <ProductsList productList={products} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
      </div>
    </div>
  );
};

export default App;

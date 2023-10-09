import React, { FC, useState, ChangeEvent, FormEvent } from "react";

import css from "./Form.module.css";
import Product from "../../models/Products";

interface FormProps {
  addProduct: (newProduct: Product) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

const Form: FC<FormProps> = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newProduct;

    if (title && price && img) {
      addProduct({
        title,
        price: Number(price),
        img,
        id: Date.now(),
      });

      setNewProduct(initState)
    }
  }; 

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="title"
        placeholder="Enter title"
        onChange={handleChange}
        value={newProduct.title}
      />
      <input
        className={css.input}
        type="text"
        name="price"
        placeholder="Enter price"
        onChange={handleChange}
        value={newProduct.price}
      />
      <input
        className={css.input}
        type="text"
        name="img"
        placeholder="Enter img"
        onChange={handleChange}
        value={newProduct.img}
      />
      <button className={css.button} type="submit">
        Add product
      </button>
    </form>
  );
};

export default Form;

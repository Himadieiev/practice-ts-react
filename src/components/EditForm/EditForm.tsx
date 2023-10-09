import React, { FC, useState, ChangeEvent, FormEvent } from "react";

import css from "./EditForm.module.css";
import Product from "../../models/Products";

interface EditFormProps {
  product: Product;
  updateProduct: (newProduct: Product) => void;
  handleToggleEdit: () => void;
}

const EditForm: FC<EditFormProps> = ({
  product,
  updateProduct,
  handleToggleEdit,
}) => {
  const [editProduct, setEditProduct] = useState<Product>(product);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editProduct;

    if (title && price && img) {
      updateProduct(editProduct);
      handleToggleEdit();
    }
  };

  return (
    <form className={css.editForm} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="title"
        placeholder="Enter title"
        onChange={handleChange}
        value={editProduct.title}
      />
      <input
        className={css.input}
        type="text"
        name="price"
        placeholder="Enter price"
        onChange={handleChange}
        value={editProduct.price}
      />
      <input
        className={css.input}
        type="text"
        name="img"
        placeholder="Enter img"
        onChange={handleChange}
        value={editProduct.img}
      />
      <button className={css.button} type="submit">
        Update product
      </button>
    </form>
  );
};

export default EditForm;

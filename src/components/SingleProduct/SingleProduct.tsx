import React, {FC, useState} from 'react'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

import css from './SingleProduct.module.css'
import Product from '../../models/Products'
import EditForm from '../EditForm/EditForm'

interface SingleProductProps {
    product: Product;
    updateProduct: (newProduct: Product) => void;
    deleteProduct: (id: number) => void
}

const SingleProduct: FC<SingleProductProps> = ({product, updateProduct, deleteProduct}) => {
  const [edit, setEdit] = useState<boolean>(false)

  const handleToggleEdit = () => {
    setEdit(!edit)
  }

  const handleDelete = () => {
    deleteProduct(product.id)
  }

  return (
    <div className={css.product}>
        <img src={`/images/${product.img}`} alt={product.title} />
        <h2>{product.title}</h2>
        <span>{product.price}$</span>
        <div className={css.controls}>
            <AiFillEdit onClick={handleToggleEdit}/>
            <AiFillDelete onClick={handleDelete}/>
        </div>
        {edit ? <EditForm product={product} updateProduct={updateProduct} handleToggleEdit={handleToggleEdit}/> : null}
    </div>
  )
}

export default SingleProduct

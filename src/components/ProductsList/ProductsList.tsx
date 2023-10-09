import React, {FC} from 'react'

import css from './ProductList.module.css'
import Product from "../../models/Products";
import SingleProduct from '../SingleProduct/SingleProduct';

interface ProductListProps {
    productList: Product[];
    updateProduct: (newProduct: Product) => void;
    deleteProduct: (id: number) => void;
}

const ProductsList:FC<ProductListProps> = ({productList, updateProduct, deleteProduct}) => {
  return (
    <div className={css.container}>
        {productList.map((product)=>{
            return <SingleProduct key={product.id} product={product} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
        })}
    </div>
  )
}

export default ProductsList

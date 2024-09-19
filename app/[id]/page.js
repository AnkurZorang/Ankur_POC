
"use client";
import ProductDetails from '../components/ProductDetails';

import { products } from '../assets/assets';  

export default function ProductPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p._id === id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
   
      <ProductDetails product={product} />
   
  );
}

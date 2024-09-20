
"use client";
import ProductDetails from '../components/ProductDetails';

import { products } from '../assets/assets';  
import RelatedProducts from '../components/RelatedProducts';
import Newsletter from '../components/Newsletter';

export default function ProductPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p._id === id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
       <div>
      <ProductDetails product={product} />
      <RelatedProducts mainProduct={product} products={products}/>
      <Newsletter />
      </div>
   
  );
}

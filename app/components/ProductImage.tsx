import React from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductImageProps = {
  product: Product;
};

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
    </div>
  );
};

export default ProductImage;

import React, { useEffect, useState } from 'react';
import { db } from '../Config/Firebase';
import Card from './Card';
import { collection, getDocs } from 'firebase/firestore';

const ProductCard = () => {
  const [products, setProducts] = useState([]); 
  
  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, 'products');
      const productsSnapshots = await getDocs(productsCollection);
      const productList = productsSnapshots.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // createdAt: new Date().toISOString(),
        };
      });
      
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <>
      <div>
        <h1 className="text-2xl pt-3 pb-3">Fresh recommendations</h1>
        <div className="grid grid-cols-4 gap-y-8 justify-center mb-20">
       
          {products.map((product) => (
<Card
              key={product.id}
              productName={product.productName}
              price={product.price}
              phoneNumber={product.phonenumber}
              // createdAt={product.createdAt}
              imageUrl={product.imageUrl}
              location = {product.location}
              id={product.id}
            >
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;

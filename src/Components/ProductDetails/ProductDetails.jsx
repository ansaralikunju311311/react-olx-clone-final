
import  { useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/Firebase';
import { useParams } from 'react-router-dom';
import { signincontext } from '../../App';
const ProductDetails = () => {
    const {propsUser} = useContext(signincontext)
 
    const {id} = useParams();
  
    

    console.log('function id',id)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) {

        console.log('Invalid product ID');
        setLoading(false);
        return;
      }
      
      try {
        const productDoc = doc(db, "products", id);
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
          setProduct(productSnapshot.data());
        } else {
          console.log('Product does not exist');
        }
        console.log('insdie id',id)
      } catch (error) {
        console.log('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  
  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex gap-5 mt-10 mb-10">
      <div className="p-3 border">
        <img
          src={product.imageUrl} 
          alt={product.productName}
          className="border border-black min-w-[800px] max-h-full"
        />
      </div>
      <div className="flex flex-col p-5 border">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-2xl">Product Name</h1>
              <p className="text-xl mt-4">{product.productName}</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl">Seller</h1>
              <p className="text-xl mt-4">{propsUser.displayName}</p>
            </div>
          </div>
          <h1 className="font-bold text-2xl mt-8">Price</h1>
          <p className="text-xl mt-2">&#8377; {product.price}</p>
          <hr className="mt-5 mb-5" />
          <h1 className="font-bold text-2xl">Description</h1>
          <p className="text-xl mt-3">{product.description}</p>
          <div className="flex justify-center items-center mt-10">
            <button className="w-full border-2 p-4 border-[#002F34] hover:bg-[#002F34] hover:text-white">
              Chat with seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

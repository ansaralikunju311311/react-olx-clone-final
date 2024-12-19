import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signincontext } from '../../App';
import { db } from '../Config/Firebase';
import { setDoc, collection, addDoc } from 'firebase/firestore';

const Sell = () => {
  const { auth, propsUser,user } = useContext(signincontext); // Use signincontext to get the authenticated user
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [productName, setProductname] = useState('');
  const [priceValue, setPrice] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [description, setDescription] = useState('');
  const [location,SetLocation] = useState('')
  const [file, setFile] = useState(null);

  const [uploadError, setUploadError] = useState(null); // For showing upload errors

  useEffect(() => {
    if (!user) {
      alert('Please log in to access this page.');
      navigate('/'); // Redirect to login if not authenticated
    }
  }, [user]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadToCloudinary = async () => {
    if (!file) throw new Error('No file selected for upload');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'testing'); // Replace with your Cloudinary preset
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dliraelbo/image/upload',
        formData
      );
      return response.data.url; // Return the Cloudinary URL
    } catch (error) {
      console.error('Cloudinary upload error:', error.message);
      return null;
    }
  };


  const onSubmit = async () => {
    console.log('fnjjvnjf')
    if (user) {
      try {
        const imageUrl = await uploadToCloudinary();
        if (!imageUrl) throw new Error('Image upload failed');
         await uploadToFirestore(imageUrl);
        
        navigate('/home');
        
      } catch (error) {
        console.error('Error posting product:', error.message);
        setUploadError(error.message);
      }
    }
  };
  const uploadToFirestore = async (imageUrl) => {
    console.log(imageUrl)
    console.log(`dbygef`,propsUser);
    console.log(propsUser.uid);
    try {
      console.log('gvhgvhgvgvg'),
      await addDoc(collection(db, 'products'), {
        
        productName,
        price: priceValue,
        phoneNumber: phonenumber,
        description,
        imageUrl,
        // location:location,
        createdAt: new Date().toISOString(),
        uid: propsUser.uid,
      });
     
      console.log(db)
     
      alert('Product added successfully');
      setDescription('');
      setPhonenumber('');
      setProductname('');
      setPrice('');
      // SetLocation('');
      setFile(null);
    } catch (error) {
      console.error('Firestore error:', error.message);
      throw new Error('Failed to store product details in Firestore');
    }
  };

 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mx-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => navigate(-1)}
            className="cursor-pointer hover:text-gray-600"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sell Your Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Product Name */}
          <div>
            <label htmlFor="product-name" className="block text-sm font-medium text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              placeholder="Product Name"
              {...register('productName', { required: 'Product name is required' })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setProductname(e.target.value)}
            />
            {errors.productName && (
              <p className="text-red-500 text-sm">{errors.productName.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              placeholder="Enter your phone number"
              {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Enter a valid 10-digit phone number',
                },
              })}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div>
          {/* <label htmlFor="Location" className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <input type="text" 
              placeholder='enter  the location'

              {...register('location',{required:'location is required',minLength:{value:3,message:'enter the location properly'}})}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => SetLocation(e.target.value)}


            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )} */}

          </div>









          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Enter the price"
              {...register('price', { required: 'Price is required', min: { value: 1, message: 'Price must be greater than 0' } })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter the description"
              {...register('description', {
                required: 'Description is required',
                minLength: { value: 20, message: 'Description must be at least 20 characters' },
              })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-600">
              Upload Image
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Post Now
          </button>
        </form>
        {uploadError && <p className="text-red-500 text-center mt-4">{uploadError}</p>}
      </div>
    </div>
  );
};

export default Sell;

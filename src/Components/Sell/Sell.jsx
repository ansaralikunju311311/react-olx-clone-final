

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { signincontext } from '../../App';

const Sell = () => {
    const {auth,onAuthStateChanged,user} = useContext(signincontext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [file, setFile] = useState(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const uploadToCloudinary = async () => {
    if (!file) throw new Error('No file selected for upload');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'testing'); // Replace with your Cloudinary preset
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/dliraelbo/image/upload',
      formData
    );
    // console.log(response.data.url)
    return response.data.secure_url; // Return the Cloudinary URL
  
  };
  const onSubmit =async()=>
  {
      if(user)
      {
        try {
            const imageurl = await uploadToCloudinary();
            console.log(`thisis image url`,imageurl)
            alert('add posted success');
            navigate('/home');  
        } catch (error) {
               console.log(error)
        }
      }
  }
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
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
            )}
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
      </div>
    </div>
  );
};

export default Sell;

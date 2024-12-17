import React from 'react';
const Title = () => {
  return (
    <div className="flex justify-center ">
      <div className="bg-white shadow-md px-4 flex items-center justify-center rounded-md w-[90%] h-[50px]">
        <ol className="flex items-center space-x-6 text-gray-700 text-sm overflow-x-auto">
          <li className="font-bold text-black cursor-pointer">ALL CATEGORIES</li>
          <li className="hover:text-blue-600 cursor-pointer">Cars</li>
          <li className="hover:text-blue-600 cursor-pointer">Motorcycles</li>
          <li className="hover:text-blue-600 cursor-pointer">Mobile Phones</li>
          <li className="hover:text-blue-600 cursor-pointer">
            For Sale: Houses & Apartments
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Scooters</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Commercial & Other Vehicles
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            For Rent: Houses & Apartments
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Title;


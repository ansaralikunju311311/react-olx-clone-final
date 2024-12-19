import React from 'react';
import bikewale from '../../../assets/bikewale.svg';
import cartrade from '../../../assets/cartrade.svg';
import cartrade_tech from '../../../assets/cartrade_tech.svg';
import carwale from '../../../assets/carwale.svg';
import mobility from '../../../assets/mobility.svg';

const Sponser = () => {
  return (
    <div className="bg-green-900 py-6 mx-9">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center space-x-10 px-8 mb-4 ">
       

        <img src={bikewale} alt="Bikewale" className="h-28 w-28 flex gap-5"/>
        <img src={cartrade} alt="CarTrade" className="h-28 w-28 gap-10"/>
        <img src={cartrade_tech} alt="CarTrade Tech" className="h-28 w-28 gap-5" />
        <img src={carwale} alt="CarWale" className="h-28 w-28 gap-5" />
        <img src={mobility} alt="Mobility" className="h-28 w-28 gap-5" />
      </div>
      
      <div className="text-center text-sm text-white-600 space-y-2">
        <p>
          <a href="#" className="hover:underline">
            Help
          </a>{' '}
          -{' '}
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </p>
        <p>All rights reserved © 2006-2024 OLX</p>
      </div>
    </div>
  );
};
export default Sponser;

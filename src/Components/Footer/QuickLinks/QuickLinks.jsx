
import playstore from '../../../assets/playstore.webp';
import phone from '../../../assets/appstore.webp';

const QuickLinks = () => {
  return (
    <div className="bg-gray-100 p-8 mx-10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-start">
      
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-base font-bold mb-4">POPULAR LOCATIONS</h4>
          <ul className="space-y-2 text-sm">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>

      
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-base font-bold mb-4">TRENDING LOCATIONS</h4>
          <ul className="space-y-2 text-sm">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>

     
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-base font-bold mb-4">ABOUT US</h4>
          <ul className="space-y-2 text-sm">
            <li>Tech@OLX</li>
          </ul>
        </div>

        
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-base font-bold mb-4">OLX</h4>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy Information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>

       
        <div className="w-full md:w-1/5 md:order-last flex flex-col items-center md:items-end">
          <h3 className="text-base font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <img src={playstore} alt="Play Store" className="w-24 h-auto" />
            <img src={phone} alt="App Store" className="w-24 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;

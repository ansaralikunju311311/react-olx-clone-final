import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { signincontext } from '../../App'
const Card =({ productName, price, createdAt,imageUrl,id,location})=>{
  const navigate = useNavigate();
  const {user} = useContext(signincontext);
  const handleCardClick = () => {

    if(user)
    {
      navigate(`product/${id}`);
    }
    else{
        alert('login first')
    }


    
    console.log(`this id this okkk`,id)
  };
  
  return (
    <div
      className="flex border-2 justify-center p-2 max-w-72 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img src={imageUrl} className="w-72 h-44 mb-5" alt="Product" />
        <i className="fa-regular fa-heart bg-white p-2 rounded-full absolute top-3 right-3"></i>
        <p>{productName}</p>
        <p className="">&#8377; {price}</p>
        <p className="absolute right-2 bottom-0">{location}</p>
      
        <p className="absolute right-2 bottom-3">{createdAt}</p>
      </div>
    </div>
  );
}
export default Card;

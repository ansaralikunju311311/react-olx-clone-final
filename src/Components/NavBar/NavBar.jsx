import olxlogo from '../../assets/olxlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import sell from '../../assets/sell.png';
import { useContext, useEffect, useState } from 'react';
import { signincontext } from '../../App';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/google-icon.png'
import loginGuitarImg from '../../assets/login-guitar.webp'
import Modalgoogle from '../Modal/Modalgoogle';

const NavBar = () => {

const navigate = useNavigate();
const [viewprofile,setviewProfile] = useState(false);
const [isModalVisible, setIsModalVisible] = useState(false);
const showProfile = ()=>
{
  setviewProfile(!viewprofile)
}
const handlesell = ()=>
{
  if(user)
  {
    navigate('/sell');
  }
  else{
    // alert('please login then sell')
    openModal()
  }
}
const openModal = ()=>
{
  setIsModalVisible(true)

}
const closeModal = ()=>
{
  setIsModalVisible(false)
}

const {handlesigin,user,handlesigout} = useContext(signincontext);
useEffect(()=>
  {
    console.log('the user fommr their ' ,user);
    console.log('the active user is ',user.displayName)
    if(user)
    {
      setIsModalVisible(false)
    }
  
  },[user])

  
  return (
    <div className='flex items-center w-full px-4 py-2 bg-white shadow-md'>

      <div className='mr-4'>
        <img src={olxlogo} alt="OLX Logo" className='h-8' />
      </div>

     
      <div className='flex items-center border border-gray-300 rounded-md px-2 mr-4 w-1/4'>
        <input
          type="text"
          placeholder='Select location'
          className='w-full outline-none text-sm px-2'
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-500' />
      </div>

      
      <div className='flex items-center border border-gray-300 rounded-md px-2 mr-4 flex-grow'>
        <input
          type="text"
          placeholder='Find cars, bikes, and more'
          className='w-full outline-none text-sm px-2'
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-500' />
      </div>

      
      <div className='flex items-center mr-4 cursor-pointer'>
        <p className='text-sm font-medium'>ENGLISH</p>
        <FontAwesomeIcon icon={faAngleDown} className='ml-1 text-gray-500' />
      </div>

     
      <div className='mr-4'>
      {user?( <button className='text-sm font-medium text-blue-600 border border-blue-600 px-4 py-1 rounded-md hover:bg-blue-100'
          onClick={showProfile} >
             <FontAwesomeIcon icon={faUser}/> <FontAwesomeIcon icon={faAngleDown} onClick={showProfile}/>
             {/* {viewprofile?(<h1>hellooo</h1>):null} */}

             {viewprofile && user ? (
                <div className="absolute top-12 right-[-5px] w-[300px] bg-white shadow-md">
                  <div className="absolute right-0 top-[-15px] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-white "></div>
                  <div className="p-5">
                    <div className="flex items-center justify-around mb-8">
                      <FontAwesomeIcon icon={faUser}/>
                      <p className="font-bold text-2xl">
                        {user.displayName || "Guest"}
      
                      </p>
                    </div>
                    <button className="p-3 w-full bg-[#002F34] text-white">
                      View and edit profile
                    </button>
                  </div>
                  <hr className="w-full mt-5 mb-5" />
                  <div className="flex items-center gap-3 text-xl pt-3 pb-3 cursor-pointer hover:bg-cyan-200 ps-5">
                    <i className="fa-solid fa-gear"></i>
                    <p>Settings</p>
                  </div>
                  <div
                    className="flex items-center gap-3 text-xl pt-3 pb-3 cursor-pointer hover:bg-cyan-200 p-5"
                    onClick={handlesigout}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <p>Logout</p>
                  </div>
                </div>
              ) : null}
        </button>):( <button className='text-sm font-medium text-blue-600 border border-blue-600 px-4 py-1 rounded-md hover:bg-blue-100'
        onClick={openModal}>
           Login 
        </button>)}

      </div>
        <Modalgoogle isVisible={isModalVisible} onclose={closeModal}>
        <div className="flex flex-col justify-center items-center gap-8">
            <img src={loginGuitarImg} alt="A guitar image" width={"150px"} />
            <p className="text-center">
              Help us become one of the safest places to buy and sell
            </p>
            <div className="w-full">
              <button
                className="p-2 flex justify-center items-center gap-3 border rounded-lg w-full hover:bg-gray-200"
                onClick={handlesigin}
              >
                <img src={googleIcon} alt="Google icon" width={"30px"} />
                Sign in with Google
              </button>
            </div>
          </div>

        </Modalgoogle>


      <div>
        <img src={sell} alt="Sell" className='h-10 cursor-pointer' onClick={handlesell}/>
      </div>
    </div>
  );
};

export default NavBar;

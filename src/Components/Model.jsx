import React from 'react'
import googleIcon from '../assets/google-icon.png'
import loginGuitarImg from '../assets/login-guitar.webp'

const Model = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
            <img src={loginGuitarImg} alt="A guitar image" width={"150px"} />
            <p className="text-center">
              Help us become one of the safest places to buy and sell
            </p>
            <div className="w-full">
              <button
                className="p-2 flex justify-center items-center gap-3 border rounded-lg w-full hover:bg-gray-200"
                // onClick={handleGoogleSignIn}
              >
                <img src={googleIcon} alt="Google icon" width={"30px"} />
                Sign in with Google
              </button>
            </div>
          </div>
  )
}

export default Model

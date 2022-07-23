import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const user = {
    email: "",
    password: "",
  };
  document.title = 'Urobic My-Account'
  const [email  , setEmail] = useState('')
  const [password  , setPassword] = useState('')
  const [userData, setUserData] = useState(user);
  const [loginEmail , setLoginEmail] = useState('')
  const [loginPassword , setLoginPassword] = useState('')

  const navigate = useNavigate()

  const registerUser = ()=>{
    console.log(email , password)
    if(email == '' || password == '')
    alert('Please fill the form correctly.')
    else{
      const newUser = {email : email , password : password }
      setUserData(newUser)
      setEmail('')
      setPassword('')
    }
  }

  const loginUser = ()=>{
    if(userData.email == '' && userData.password == '')
    alert('Please Register first')
    else if(userData.email != loginEmail || userData.password != loginPassword)
      alert('Invalid Email or Password !')

    else{
      alert('Login Successful !')
      navigate('/')
    }
  }

  return (
    <div>
      <div>
        <h1 className=" text-blue-700 font-normal text-4xl ">My Account</h1>
        <br />
        <h1 className=" text-blue-700 font-normal text-base">
          Home {" > "} My Account
        </h1>
      </div>
      <div className="flex justify-around border-green-500">
        {/* Login */}

        <div>
          <h1 className=" text-2xl font-medium  mb-5">Login</h1>
          <div className=" text-left mb-5">
            <p className=" ml-4 mb-2">Connect with</p>
            <button className=" zoom rounded-md flex bg-blue-600 w-56 align-middle h-10">
              <img
                style={{ border: "1px solid blue" }}
                className=" rounded-md bg-white h-10 w-10"
                src="https://www.uboric.com/wp-content/plugins/miniorange-login-openid/includes/images/icons/g.png"
              />
              <p className=" m-auto text-white">Login with Google</p>
            </button>

            <p className=" mt-10 mb-2">Username or Email address <span className=' text-red-600'>*</span></p>
            <input
             value={loginEmail}
             onChange={(e) => setLoginEmail(e.target.value)}
            className=" inputBox" />

            <p className=" mt-10 mb-2">Password <span className=' text-red-600'>*</span></p>
            <input type="password"
             value={loginPassword}
             onChange={(e) => setLoginPassword(e.target.value)}
            className=" inputBox" />
            <button
            onClick={loginUser}
              style={{ border: "1px solid black" }}
              className=" bg-orange-300 px-5 py-3 rounded-md  font-medium mt-10 "
            >
              Login
            </button>
          </div>
        </div>

        {/* Register */}

        <div className=" text-left w-100%">
          <h1 className=" text-2xl font-medium mb-8 text-center">Register</h1>
          <p className=" w-5/6 text-left mb-8">
            Creating an account is quick and easy, and will allow you to move
            through our checkout quicker.
          </p>
          <p className=" text-sm mb-4">Email Address <span className=' text-red-600'>*</span></p>
          <input
           value={email}
           onChange={(e) => setEmail(e.target.value)}
            className=" inputBox bg-gray-100 mb-4"
            style={{ width: "100%" }}
          />
          <p className=" text-sm mb-4">Password <span className=' text-red-600'>*</span></p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" inputBox bg-gray-100 mb-4"
            style={{ width: "100%" }}
          />
          <p className="w-5/6 text-left mb-2">
            A link to set a new password will be sent to your email address.
          </p>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage <br /> access to your account,
            and for other purposes described in our privacy policy.
          </p>
          <button
          onClick={registerUser}
            style={{ border: "1px solid black" }}
            className=" bg-orange-300 px-5 py-3 rounded-md  font-medium mt-10 "
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

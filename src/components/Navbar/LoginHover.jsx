import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCaretForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function LoginHover() {
  return (
    <div>
      <div className="dropdown inline-block relative">
        <Link to="/my-account">
          <FaUserCircle
            style={{
              height: "32px",
              marginRight: "20px",
              width: "32px",
              color: "#002D62",
            }}
          />
        </Link>
        <div
          className="dropdown-menu w-80 bg-white -ml-64 pt-6 pl-6 absolute z-50 hidden text-gray-700 mt-4 text-left shadow-xl "
          style={{borderRight : '2px solid black'}}
        >
            <h1 className=" mt-3 text-3xl text-blue-900 font-semibold">Sign In</h1>
            <p className=" m-auto mt-8 text-xl">CREATE A ACCOUNT</p>
            <p className="mt-3">Username or email <span className=' text-red-600'>*</span></p>
            <input className="  loginInput" />
            <p className="mt-3">Password <span className=' text-red-600'>*</span></p>
            <input className="loginInput" />
            <p className="mt-8">LOST YOUR PASSWORD?</p>
            <button className=" mt-5 mb-5 bg-yellow-500 w-3/4 rounded-sm py-1 font-medium text-black" style={{border : '1px solid black'}}>LOGIN</button>
        </div>

        {/* <ul className="dropdown-menu w-3/6 absolute z-50 hidden text-gray-700 pt-1 text-left pr-64">
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to='/products/clothing'>Fashion <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/kitchen">Kitchen <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/electronics">Accessories <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/kitchen">Health & Presonal Care <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/electronics">Electronics <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/electronics">Electric Appliance <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/spices">Paintings <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/spices">Anti Puncture Liquid <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
    <li className=""><Link className="rounded-b bg-white hover:text-black py-2 px-4 whitespace-no-wrap flex" to="/products/footwear">Footwear <IoCaretForwardOutline className=' mt-1.5 text-gray-700' /></Link></li>
  </ul>
   */}
      </div>
    </div>
  );
}

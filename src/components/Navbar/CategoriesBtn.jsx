import React from 'react'
import {IoCaretForwardOutline} from 'react-icons/io5'
import {Link } from 'react-router-dom'
export default function CategoriesBtn() {
  return (
        <div  className=' hover:bg-black hover:text-white p-1'>
<div className="dropdown inline-block relativ">
  <button className=" font-semibold py-2 px-4 rounded inline-flex items-center">
    <span className="mr-1">Categories</span>
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul className="dropdown-menu w-3/6 absolute z-50 hidden text-gray-700 pt-1 text-left pl-2">
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
  
</div>

</div>
  )
}

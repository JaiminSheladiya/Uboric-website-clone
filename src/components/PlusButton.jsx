import React from 'react'
import {FaPlus} from 'react-icons/fa'
export default function PlusButton() {
  return (
    <div className=' text-left ml-10'>
      <button className=' fixed bottom-8 z-0 bg-red-500 rounded-full p-4'><FaPlus className=' text-white h-5 w-5 font-bold' /></button>
    </div>
  )
}

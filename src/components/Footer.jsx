import React from 'react'
import { Flex } from '@chakra-ui/react'
import {FaInstagram , FaFacebook} from 'react-icons/fa';
import Review from './Review';
export default function Footer() {
  return (
    <>
    <div className=' h-auto mt-8 pt-12 text-white font-normal' style={{backgroundColor : '#9b870c'}}>
        <h1 className=' text-4xl'>What Our Customer Says</h1>
        <Review />
        <button className=' mb-28 bg-amber-300 p-2 text-black font-normal rounded-md px-5 hover:bg-amber-200 mt-6'>
            Add Your Review
        </button>
    </div>
    <div className=' bg-black h-96 pt-20'>
        <img className=' m-auto h-14 w-40' src='https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png'></img>
        <div className='flex mt-5 text-white text-lg w-max gap-10 m-auto' >
        <h1>About Us</h1>
        <h1>Contact</h1>
        <h1>Shipping & Returns</h1>
        <h1>My Account</h1>
        <h1>Privacy Policy</h1>
        <h1>Become A Seller</h1>
        <h1>Terms & Conditions</h1>
        </div>
        <h1 className='mt-5 text-white text-lg w-max m-auto'>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</h1>
    
    <div className='flex gap-3 w-10 m-auto mt-10'>
    <div className=' w-min p-3 rounded-full bg-amber-300'>
    <a className='' href='https://www.instagram.com/uboric_shoes/?igshid=1scv9g4eccoi5'><FaFacebook className=' text-black text-2xl' /></a>
    </div>

    <div className=' w-min p-3 rounded-full bg-amber-300'>
    <a className='' href='https://www.instagram.com/uboric_shoes/?igshid=1scv9g4eccoi5'><FaInstagram className=' text-black text-2xl' /></a>
    </div>
    </div>
    </div>
        
    </>
  )
}

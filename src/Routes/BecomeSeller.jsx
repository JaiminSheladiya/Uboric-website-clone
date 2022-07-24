import React from 'react'

export default function BecomeSeller() {
  document.title = 'Urobic Become a Seller'
  return (
    <div>
         <div>
        <h1 className=" text-blue-700 font-normal text-4xl ">Become a seller</h1>
        <br />
        <h1 className=" text-blue-700 font-normal text-base">
          Home {" > "} Become a seller
        </h1>

        <div className=' text-left w-3/4 m-auto'>
          <h1 className=' text-2xl font-medium mt-20 mb-5'>Vendor Registration</h1>
          <p className=' mb-5'>Submit the form below to become a vendor on this store.</p>
          
          <div className='flex w-full'>
            <div className='w-1/2 pr-10'>
            <p className='mb-3'>First Name <span className=' text-red-600'>*</span> </p>
            <input className=" sellerInput"  />
            </div>
            <div className='w-1/2 ml-10'>
            <p  className='mb-3'>Last Name <span className=' text-red-600'>*</span></p>
            <input className=" sellerInput" />
            </div>
            </div>

            <p  className='mb-3 mt-5'> Login UserName <span className=' text-red-600'>*</span></p>
            <input className=" sellerInput" />

            <div className='flex w-full mt-5'>
            <div className='w-1/2 pr-10'>
            <p className='mb-3'>Email <span className=' text-red-600'>*</span></p>
            <input className=" sellerInput"  />
            </div>
            <div className='w-1/2 ml-10'>
            <p  className='mb-3'>Confirm Email <span className=' text-red-600'>*</span></p>
            <input className=" sellerInput" />
            </div>
            </div>

            <p  className='mb-3 mt-5'> Vendor Name <span className=' text-red-600'>*</span></p>
            <input className=" sellerInput" />

        </div>

        
      </div>

      <button
            style={{ border: "1px solid black" }}
            className=" bg-orange-300 px-5 py-3 rounded-md  font-medium mt-10 "
          >
            Register
          </button>
    </div>
  )
}

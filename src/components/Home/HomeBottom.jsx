import React from 'react'
import {FaCheck} from 'react-icons/fa'
export default function HomeBottom() {
  var flexItems = ["User-Friendly",
    "Safe & Secure Shopping",
    "Check Out Closely",
    "Multiple Payment Options:",
    "Order History:"]
  return (
    <div>
        <div className=' w-4/6 m-auto mt-20 bg-gray-100 pt-6 pl-5 pr-5 pb-8'>
            <h1 className=' font-medium text-3xl text-blue-900 tracking-widest m-auto'>The Ultimate Domestic Online Shopping Experience <br /> Platform in India</h1>
            <p className=' text-left mt-10'>Online shopping with Uboric is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your homes and just clicking on your requirements to get it delivered at your doorstep. Your search for the latest trending variety of unique products ends right here. A wide range of international products from global brands are available at your fingertips. We provide you with a world-class online shopping experience, along with superior service, to suit all your specific requirements. Our products are very reasonably priced and are not easily available elsewhere. Our high-end technology-based systems, combined with a human approach, ensure that you have an amazing and blissful online shopping experience with us. Our emphasis on customer delight drives every activity we undertake to provide you an ultimate, hassle-free and pleasant shopping experience. Our diverse categories of products comprise of fashion & jewellery, mobiles and tablets, home and furniture, electronics, health care and supplements, sports and fitness, beauty and perfumes. We offer almost every variety of product that your heart desires. Just Go Ahead and Explore the magical world of online shopping with Uboric! 24×7 Customer Care: For all your queries and concerns regarding your shopping orders.</p>
            <h1 className=' font-medium text-3xl text-blue-900 tracking-widest m-auto mt-8'>Benefits of shopping on Uboric :</h1>
        </div>
        <div className='flex w-4/5 m-auto justify-between'>
            {
              flexItems.map((item)=>(<div className='flex' style={{alignItems : 'center'}}><FaCheck style={{color : 'blue',marginTop:'2px', marginRight:'8px'}} /><h1 className=' font-normal text-xl'>{item}</h1></div>))
            }
        </div>
    </div>
  
  )
}

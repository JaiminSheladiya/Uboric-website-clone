import React from 'react'
import {Box , Text ,Flex,Input,Image ,Button, color} from '@chakra-ui/react'
import {IoSearch} from 'react-icons/io5'
import {IoMdArrowDropdown } from 'react-icons/io'
import {FaUserCircle , FaCartPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import CategoriesBtn from './CategoriesBtn'
export default function Navbar() {
 
  return (
    <div style={{marginBottom : '15px'}}>
        <Box bg='#1E516C' position='fixed' top={0} zIndex='50' w='100%' fontSize='15px' color='white' padding='7px'>FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500</Box>
  {/* Logo and search flex */}
  <br />
    <Flex justify='space-between' w='98%' m='auto'>
        <Flex w='35%' alignItems='center' justify='center'>
          <Input borderColor='black' w='80%' h='30px' placeholder='Search here...' />
          <Button bg='black' color='white' h='28px'  ml='-49px'><IoSearch /></Button>
          </Flex>
        <Image h='85px' mt='15px' ml='-250px' src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" />
        <Flex alignItems='center' mr={8}>
          <FaUserCircle style={{height : "32px",marginRight:'20px', width:"32px" , color:'#002D62' }} /><FaCartPlus style={{height : "32px", width:"32px" , color:'#002D62' }} /> <Text>(0)</Text>
        </Flex>
    </Flex>
{/* Categories flex */}
    <Flex   justify='space-between' w='50%' m='auto' mt='10px' fontWeight='600'>
      <Box _hover={{ bg: 'black' , color : 'white' }} p='10px'><Link  to='/'>Home</Link></Box>
      {/* <Flex  _hover={{ bg: 'black' , color : 'white' }} p='10px' alignItems='center'><CategoriesBtn /> <IoMdArrowDropdown style={{marginTop : '5px'}} /></Flex> */}
      <CategoriesBtn />
      <Box _hover={{ bg: 'black' , color : 'white' }} p='10px'><Link to='/customerlogin'  >Customer/Guest login</Link></Box>
      <Box _hover={{ bg: 'black' , color : 'white' }} p='10px'><Link to='/bulkorder'>Merchant/Bulk Order</Link></Box>
      <Box _hover={{ bg: 'black' , color : 'white' }} p='10px'><Link to='/becomeseller'>Become A Seller</Link></Box>
    </Flex>
    </div>
  )
}

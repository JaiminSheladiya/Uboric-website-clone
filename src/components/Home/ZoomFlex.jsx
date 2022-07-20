import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function ZoomFlex() {
  return (
    <div className=' mb-10'>
           <Flex w='96%' gap='20px' h='350px' m='auto'>
          <img className='w-full zoom' src='https://www.uboric.com/wp-content/uploads/2020/12/kithchen-tools-768x602.jpg'></img>
          <img className='w-full zoom' src='https://www.uboric.com/wp-content/uploads/2020/12/Air-Tight-Containers-768x602.jpg'></img>
          <img className=' w-full zoom' src='https://www.uboric.com/wp-content/uploads/2020/12/Gas-Lighter-1024x1024.jpg'></img>
        </Flex>
    </div>
  )
}

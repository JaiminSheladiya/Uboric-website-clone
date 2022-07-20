import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function ZoomTwo({src1 , src2}) {
  return (
    <div className=' mb-5'>
    <Flex w='96%' gap='60px' h='400px' m='auto'>
   <img className='w-full zoom' src={src1}></img>
   <img className='w-full zoom' src={src2}></img>
   </Flex>
</div>
  )
}

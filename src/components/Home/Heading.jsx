import React from 'react'
import {Image , Flex , Text} from '@chakra-ui/react'
export default function Heading({heading , logo}) {
  return (
    <div>
          <Flex justify='space-between' m='auto' h='100px' alignItems='center' width='30%' >
                <Image src={logo} h={10} w={20} />
                    <h1 className=' font-medium text-3xl text-blue-900 tracking-widest'>{heading}</h1>
                <Image src={logo} h={10} w={20}/>        
        </Flex>
    </div>
  )
}

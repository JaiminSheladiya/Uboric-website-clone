import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function HomeCards({imgUrl}){
  return (
    <div>
        <Flex w='97%' m='auto' h='415px' gap={5} mt='25px' justifyContent='space-between' mb={10} >
            {
                imgUrl.map((item)=><img className='shadow zoom rounded-md' src={item} />)
            }
        </Flex>
    </div>
  )
}

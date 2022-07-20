import React from 'react'
import Heading from './Heading'
import {Flex, Image} from '@chakra-ui/react'
import ZoomFlex from './ZoomFlex'
import ZoomTwo from './ZoomTwo'
import HomeCards from './HomeCards'
import { HomeCardData } from '../../data'
import HomeBottom from './HomeBottom'
export default function HomeMain() {

  return (
    <div>
        {/* Sliding WIndow */}
        <Image h={500} w='100%' src='https://passionspoon.com/wp-content/uploads/2022/07/vibrant-vegetables-shrimp-skewers-scaled.jpg' />
        <Heading heading={'KITCHEN WARE'} logo={'https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-pkx8tvxfmbbsdlrzrk3iwlbxruc7cn5sq339xkx9cg.png'} />
        <ZoomFlex />
        <img className=' m-auto mt-20' src='https://www.uboric.com/wp-content/uploads/2020/08/Uboric-1.jpg' />
        <Heading heading={'OTHER CATEGORIES'} logo={'https://www.uboric.com/wp-content/uploads/elementor/thumbs/other-category-heading-2-e1608267154124-pkx8tt3x1t7xerw380vn741jzoq3pjulpp4thr1fv4.png'} />
        <ZoomTwo src1={'https://www.uboric.com/wp-content/uploads/2021/12/banner1-1-1.jpg'} src2={'https://www.uboric.com/wp-content/uploads/2021/12/banner2-1.jpg'} />
        <div className=' mb-4'>
        <img className='zoom' src='https://www.uboric.com/wp-content/uploads/2021/02/Headphone.jpg' />
        </div>
        <ZoomTwo src1={'https://www.uboric.com/wp-content/uploads/2021/12/banner3-1.jpg'} src2={'https://www.uboric.com/wp-content/uploads/2021/12/banner4-1.jpg'} />
       
       <HomeCards imgUrl={HomeCardData.catagoryCard} />
       
        <Heading heading={'SPICES'} logo={'https://www.uboric.com/wp-content/uploads/elementor/thumbs/spices-heading-pkx8tf0c7aomkmgkics8npln2wnli3amnrcjalmcgg.png'} />
        <HomeCards imgUrl={HomeCardData.spicesCard} />

        <Heading heading={'FOOT WEAR'} logo='https://www.uboric.com/wp-content/uploads/elementor/thumbs/shoes-icon-left-e1605175515419-pkxdaq391ri2zk5gl2xdk07d1dl8g5oc65qa62g4nk.png' />
        <Image className='zoom' mb={10} w='97%' src='https://www.uboric.com/wp-content/uploads/elementor/thumbs/men-fashion-pf2rgkwglk7z47uh031vpxcshl64adc389ivxapmss.jpg' />
        <HomeCards imgUrl={HomeCardData.shoesCard} />

        <HomeBottom />
    </div>
  )
}

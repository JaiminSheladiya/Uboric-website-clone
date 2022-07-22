import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import { Flex, Image } from "@chakra-ui/react";
import ZoomFlex from "./ZoomFlex";
import ZoomTwo from "./ZoomTwo";
import HomeCards from "./HomeCards";
import { HomeCardData } from "../../data";
import HomeBottom from "./HomeBottom";
import SlidingWindow from "./SlidingWindow";
export default function HomeMain() {
  return (
    <div>
      {/* Sliding WIndow */}
      <Link to="/products/spices">
        <SlidingWindow />
      </Link>

      <Heading
        heading={"KITCHEN WARE"}
        logo={
          "https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-pkx8tvxfmbbsdlrzrk3iwlbxruc7cn5sq339xkx9cg.png"
        }
      />

      <Link to="/products/kitchen">
        <ZoomFlex />
      </Link>

      <img
        className=" m-auto mt-20"
        src="https://www.uboric.com/wp-content/uploads/2020/08/Uboric-1.jpg"
      />

      <Heading
        heading={"OTHER CATEGORIES"}
        logo={
          "https://www.uboric.com/wp-content/uploads/elementor/thumbs/other-category-heading-2-e1608267154124-pkx8tt3x1t7xerw380vn741jzoq3pjulpp4thr1fv4.png"
        }
      />

      <Link to="/products/electronics">
        <ZoomTwo
          src1={
            "https://www.uboric.com/wp-content/uploads/2021/12/banner1-1-1.jpg"
          }
          src2={
            "https://www.uboric.com/wp-content/uploads/2021/12/banner2-1.jpg"
          }
        />
        <div className=" mb-4">
          <img
            className="zoom"
            src="https://www.uboric.com/wp-content/uploads/2021/02/Headphone.jpg"
          />
        </div>
      </Link>

      <Link to="/products/clothing">
        <ZoomTwo
          src1={
            "https://www.uboric.com/wp-content/uploads/2021/12/banner3-1.jpg"
          }
          src2={
            "https://www.uboric.com/wp-content/uploads/2021/12/banner4-1.jpg"
          }
        />

        <HomeCards key={1} imgUrl={HomeCardData.catagoryCard} />
      </Link>

      <Link to="/products/spices">
        <Heading
          heading={"SPICES"}
          logo={
            "https://www.uboric.com/wp-content/uploads/elementor/thumbs/spices-heading-pkx8tf0c7aomkmgkics8npln2wnli3amnrcjalmcgg.png"
          }
        />
        <HomeCards key={2} imgUrl={HomeCardData.spicesCard} />
      </Link>

      <Heading
        heading={"FOOT WEAR"}
        logo="https://www.uboric.com/wp-content/uploads/elementor/thumbs/shoes-icon-left-e1605175515419-pkxdaq391ri2zk5gl2xdk07d1dl8g5oc65qa62g4nk.png"
      />
      <Image
        className="zoom"
        mb={10}
        mt="25px"
        w="97%"
        src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/men-fashion-pf2rgkwglk7z47uh031vpxcshl64adc389ivxapmss.jpg"
      />
      <HomeCards key={3} imgUrl={HomeCardData.shoesCard} />

      <HomeBottom />
    </div>
  );
}

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
export default function Products() {
  const params = useParams();
  const data = products.filter((item) => params.category == item.category);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
      <h1 className=" text-blue-700 font-normal text-4xl ">
        {params.category}
      </h1>
      <br />
      <h1 className=" text-blue-700 font-normal text-base">
        Home {" > "} Products {" > "} {params.category}
      </h1>

      <div className="flex mr-5 my-11">
        <div className=" w-1/3">Filters</div>
        <div className=" grid grid-cols-4 gap-8">
          {data.map((item) => (
            <div className=" h-80 px-8 border-gray-900 shadow-xl cursor-pointer dropup">
              <img className=" h-4/6" src={item.img1} />
              <h1 className=" font-normal hover:underline">{item.name}</h1>
              <div className="flex w-full mt-3 justify-center align-middle mb-2">
                <h1 className=" text-xl text-gray-600 line-through mr-4">
                  ₹{item.sPrice}
                </h1>
                <h1 className=" text-xl">₹{item.price}</h1>
                <div class="dropup-content">
                  {/* On Hover add to cart  */}
                  <div className="flex h-1/2 w-full">
                    <h1 className=" font-medium text-center text-lg hover:text-blue-700">
                      ADD TO CART
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

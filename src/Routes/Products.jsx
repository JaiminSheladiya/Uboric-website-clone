import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductFilter from "../components/Products/ProductFilter";
import { products } from "../data";
export default function Products() {
  const params = useParams();

  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState();
  const [filterProduct , setFilterProduct] = useState([])

  useEffect(() => {
    const data = products.filter((item) => params.category == item.category);
    setProduct(data);
    window.scrollTo(0, 0);
  }, [params]);


  useEffect(() => {
    if (filter) {
      console.log(filter);
      const filterData = product.filter(
        (item) => item.price >= filter[0] && item.price <= filter[1]
      );
      console.log(filterData);
      setFilterProduct(filterData);
    }
  }, [filter]);
  document.title = `Buy ${params.category}`;
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
        {/* Product Filter */}

        <div className=" w-1/3 px-3">
          <ProductFilter setFilter={setFilter} filter={filter} />
        </div>

        {/* Product Grid */}

        <div className=" grid grid-cols-4 gap-8">
          {filterProduct.length?filterProduct.map((item) => (
            <div
              key={item.id}
              className=" h-80 px-8 border-gray-900 shadow-xl cursor-pointer dropup"
            >
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
          ))
          :product.map((item) => (
            <div
              key={item.id}
              className=" h-80 px-8 border-gray-900 shadow-xl cursor-pointer dropup"
            >
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
          ))
          }
        </div>
      </div>
    </div>
  );
}

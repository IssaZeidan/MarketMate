/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { CartContext, ProductContext } from "../../App";

const Discounts = () => {

    
  const { data } = useContext(ProductContext);
    const [ten, setTen] = useState([]);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
          setTen(data.slice(0, 10));
    });

    const handleAddToCart = (product) => {
      setCart([...cart, product]);
    };


  return (
    <>
  <div class="flex flex-col bg-white m-auto p-auto">
    <h1 className="text-3xl font-bold text-gray-900 text-center my-5">
      Today's Discount Deals
    </h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
        {ten.map((d) => (
          <div className="w-64 h-96 bg-white border border-gray-200 rounded-md shadow-sm p-2 mx-4">
            <img className="rounded-t-md w-full h-48 object-cover" src={d.image} alt="Discount image" width="250" height="250" />
            <div class="p-2 flex-1">
              <h5 className="mb-1 text-base text-black font-semibold tracking-tight">
                {d.name}
              </h5>
              <p className="mb-2 text-xs text-black">
                {d.description}
              </p>
              <p className="mb-3 font-normal text-xs text-black">
                ${d.price}
              </p>
              <a
                onClick={() => handleAddToCart(d)}
                className="inline-block px-2 py-1 text-xs font-medium text-center text-white bg-amber-400 rounded-md"
                >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</>
  );
};

export default Discounts;

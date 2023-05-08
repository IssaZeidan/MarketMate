import { useContext } from "react";
import Jumbotron from "../Jumbotron";
import { ProductContext } from "../../App";

const Vegetables = () => {

  const { data } = useContext(ProductContext);

  const vegetables = data.filter((product) => product.category === "vegetables");



  return (
    <>
      <Jumbotron />
      <div className="md:container md:mx-auto">
        <div className="flex flex-wrap justify-center -mx-2">
          {vegetables.map((d, i) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
              key={i}>
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-2 h-full">
                <img
                  className="rounded-t-md w-full h-40 object-cover object-center"
                  src={d.image}
                  alt=""/>
                <div className="p-2 h-full">
                  <h5 className="mb-1 text-base font-semibold tracking-tight text-black">
                    {d.name}
                  </h5>
                  <p className="mb-2 text-xs text-black">
                    {d.description}
                  </p>
                  <p className="mb-3 font-normal text-xs text-black">
                    ${d.price}
                  </p>
                  <a
                    href="#"
                    className="inline-block px-2 py-1 text-xs font-medium text-center text-white bg-amber-400 rounded-md focus:ring-4 focus:outline-none">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Vegetables;
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function ProductDetails({ Addtocart, Addtofav }) {
  const { id } = useParams();
  const [single, setsingle] = useState(null);
  const [dis, setdis] = useState(true);
  const [review, setreview] = useState(false);
  const [details, setdetails] = useState(false);
  const [inc, setinc] = useState(0);

  const handleInc = () => {
    if (single.images.length - 1 > inc) {
      setinc(inc + 1);
    } else {
      setinc(0);
    }
  };
  const handleDec = () => {
    if (inc < 1) {
      setinc(single.images.length - 1);
    } else {
      setinc(inc - 1);
    }
  };

  // setInterval(() => {
  //   handleInc();
  //   handleDec();
  // }, 3000);

  useEffect(() => {
    const singleproducts = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`);
        setsingle(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    singleproducts();
  }, [id]);

  const notify = (items) => {
    Addtocart(items);

    toast.success(<p className=" font-bold text-black">Added to Cart</p>);
  };

  const notifyy = (items) => {
    Addtofav(items);

    toast.success(<p className=" font-bold text-black">Added to Favourite</p>);
  };

  const handledes = () => {
    setdis(true);
    setreview(false);
    setdetails(false);
  };
  const handlereview = () => {
    setreview(true);
    setdis(false);
    setdetails(false);
  };
  const handledetail = () => {
    setdetails(true);
    setdis(false);
    setreview(false);
  };

  return (
    <div className="pt-[80px]">
      <div
        href="#"
        className="flex justify-center font-semibold text-indigo-600 text-sm mt-10 pl-2"
      >
        <svg
          className="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        <Link to="/allproducts"> Continue Shopping </Link>
      </div>
      {single ? (
        <section className="text-gray-600 body-font overflow-hidden -mt-16">
          <div className=" container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center ">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {single.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                  {single.title}
                </h1>
                <div className="flex mb-4">
                  <p
                    className="flex flex-grow justify-start    py-2 text-lg px-1 cursor-pointer"
                    onClick={handledes}
                  >
                    Description
                  </p>
                  <p
                    className="flex flex-grow justify-center   py-2 text-lg px-1 cursor-pointer"
                    onClick={handlereview}
                  >
                    Reviews
                  </p>
                  <p
                    className="flex flex-grow justify-end  py-2 text-lg px-1 cursor-pointer"
                    onClick={handledetail}
                  >
                    Details
                  </p>
                </div>
                {dis && (
                  <div>
                    <p className=" border border-black w-[140px] -mt-[19px]"></p>
                    <p className="leading-relaxed mb-4 pt-2">
                      {single.description}
                    </p>
                    {/* <p>{single.reviews[0].comment}</p> */}
                  </div>
                )}
                {review && (
                  <div className="leading-relaxed mb-4">
                    <div className="flex flex-wrap justify-center">
                      {/* <p className=" border-2 border-red-50 w-[100px] -mt-[19px]"></p> */}
                      <p className="border border-black w-[160px] h-0 -mt-[19px]"></p>
                      {/* <p className=" border-2 border-red-50 w-[100px] -mt-[19px]"></p> */}
                    </div>
                    <div className="" key={0}>
                      <p className="">
                        <b>Name:</b> {single.reviews[0].reviewerName}
                      </p>
                      <p>
                        <b>Experience:</b> {single.reviews[0].comment}
                      </p>
                      <p className="mb-2 ">
                        <b>Rating:</b> {single.reviews[0].rating}
                      </p>
                    </div>
                    <div className="" key={1}>
                      <p className="">
                        <b>Name:</b> {single.reviews[1].reviewerName}
                      </p>
                      <p>
                        <b>Experience:</b> {single.reviews[1].comment}
                      </p>
                      <p className="mb-2 ">
                        <b>Rating:</b> {single.reviews[1].rating}
                      </p>
                    </div>
                    <div className="" key={2}>
                      <p className="">
                        <b>Name:</b> {single.reviews[2].reviewerName}
                      </p>
                      <p>
                        <b>Experience:</b> {single.reviews[2].comment}
                      </p>
                      <p className="mb-2">
                        <b>Rating:</b> {single.reviews[2].rating}
                      </p>
                    </div>
                  </div>
                )}

                {details && (
                  <div className="leading-relaxed mb-4">
                    <div className="flex flex-wrap justify-end">
                      <p className="border border-black w-[140px] h-0 -mt-[19px]"></p>
                    </div>
                    <div>
                      <p>
                        <b>Warranty:</b> {single.warrantyInformation}
                      </p>
                      <p>
                        <b>Return Policy:</b> {single.returnPolicy}
                      </p>
                      <p>
                        <b>Status:</b> {single.availabilityStatus}
                      </p>
                      <p>
                        <b>Tags:</b> [{single.tags[0]}, {single.tags[1]}]
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Category</span>
                  <span className="ml-auto text-gray-900">
                    {single.category}
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2 ">
                  <span className="text-gray-500">Rating</span>
                  <span className="ml-auto text-gray-900">{single.rating}</span>
                </div>
                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Stock</span>
                  <span className="ml-auto text-gray-900">{single.stock}</span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹{`${Math.round(single.price * 83)}`}.00
                  </span>
                  <button
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => notify(single)}
                  >
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <FaHeart size={30} onClick={() => notifyy(single)} />
                  </button>
                </div>
              </div>
              <div className="w-[480px] h-[480px] border shadow-lg overflow-hidden relative">
                <div className="flex" key={single.id}>
                  <img
                    alt="ecommerce"
                    className="m-auto items-center object-cover max-w-[480px] max-h-[480px] object-center rounded text-center "
                    src={single.images[inc]}
                  />
                  <div className="flex absolute bottom-5 left-[45%] gap-5">
                    {single.images.length > 1 && (
                      <button onClick={handleDec} className="">
                        <FaArrowAltCircleLeft />
                      </button>
                    )}
                    {single.images.length > 1 && (
                      <button onClick={handleInc} className=" ">
                        <FaArrowCircleRight />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      <Toaster />
    </div>
  );
}

export default ProductDetails;

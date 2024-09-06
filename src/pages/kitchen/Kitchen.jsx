import React from "react";
import { FaHeart } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Kitchen({ Addtocart, Addtofav }) {
  const [allcategories, setallcategories] = useState([]);
  const [products, setproducts] = useState([]);
  const [selectproduct, setselectproduct] = useState("");
  const [allproducts, setallproducts] = useState([]);

  const [minprice, setminprice] = useState("");
  const [maxprice, setsmaxprice] = useState("");
  const [minrating, setminrating] = useState("");
  const [maxrating, setmaxrating] = useState("");

  useEffect(() => {
    const getallproducts = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        setallcategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getallproducts();
  }, []);

  const handleselect = (products) => {
    setselectproduct(products);
  };

  useEffect(() => {
    const getproductcategory = async () => {
      try {
        if (selectproduct) {
          const res = await axios(
            `https://dummyjson.com/products/category/${selectproduct}`
          );
          setproducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getproductcategory();
  }, [selectproduct]);

  useEffect(() => {
    const getallproducts = async () => {
      try {
        if (!selectproduct) {
          const res = await axios(
            "https://dummyjson.com/products/category/kitchen-accessories"
          );
          setallproducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getallproducts();
  }, [selectproduct]);

  const notify = (items) => {
    Addtocart(items);

    toast.success(<p className=" font-bold text-black">Added to Cart</p>);
  };

  const notifyy = (items) => {
    Addtofav(items);

    toast.success(<p className=" font-bold text-black">Added to Favourite</p>);
  };

  const handleprice = () => {
    let min = parseFloat(Math.round(minprice / 83).toFixed(0));
    let max = parseFloat(Math.round(maxprice / 83).toFixed(0));
    const filterprice = allproducts.filter(
      (priceitem) =>
        (!min || priceitem.price >= min) && (!max || priceitem.price <= max)
    );
    setallproducts(filterprice);

    const filterpricee = products.filter(
      (priceitem) =>
        (!min || priceitem.price >= min) && (!max || priceitem.price <= max)
    );
    setproducts(filterpricee);
  };

  // filter by rating
  const handlerating = () => {
    let min = parseFloat(minrating);
    let max = parseFloat(maxrating);

    const filterprice = allproducts.filter(
      (ratingitem) =>
        (!min || ratingitem.rating >= min) && (!max || ratingitem.rating <= max)
    );
    setallproducts(filterprice);

    const filterpricee = products.filter(
      (ratingitem) =>
        (!min || ratingitem.rating >= min) && (!max || ratingitem.rating <= max)
    );
    setproducts(filterpricee);
  };
  return (
    <>
      <div className="pt-[80px] ">
        {/* All Catogeries */}
        <div className="flex flex-wrap gap-0 mx-3 mt-4 items-center w-[230px] border-2 border-black pl-1">
          <p>
            <IoFilterSharp size={30} />
          </p>
          <select
            onChange={(e) => handleselect(e.target.value)}
            className=" cursor-pointer border-none"
          >
            <option>Filter by Category</option>
            {allcategories
              .filter((filteritems) =>
                ["groceries", "kitchen-accessories"].includes(filteritems)
              )
              .map((allproducts, id) => (
                <option key={id} value={allproducts}>
                  {allproducts}
                </option>
              ))}
          </select>
        </div>
        {/* inputs */}
        <div className="flex justify-center  items-center text-center gap-4 mt-5">
          <input
            type="text"
            placeholder="min price"
            className="border-2 border-black rounded-md py-1 pl-2 font-semibold sm:w-[200px] w-[100px]"
            value={minprice}
            onChange={(e) => setminprice(e.target.value)}
          />
          <input
            type="text"
            placeholder="max price"
            className="border-2 border-black rounded-md py-1 pl-2 font-semibold sm:w-[200px] w-[100px]"
            value={maxprice}
            onChange={(e) => setsmaxprice(e.target.value)}
          />
          <button
            className=" bg-red-400 py-2 px-3 rounded-md sm:w-[120px]"
            onClick={handleprice}
          >
            filter by price
          </button>
        </div>

        {/* filter by rating */}
        <div className="flex justify-center  items-center text-center gap-4 mt-5">
          <input
            type="text"
            placeholder="min rating"
            className="border-2 border-black rounded-md py-1 pl-2 font-semibold sm:w-[200px] w-[100px]"
            value={minrating}
            onChange={(e) => setminrating(e.target.value)}
          />
          <input
            type="text"
            placeholder="max rating"
            className="border-2 border-black rounded-md py-1 pl-2 font-semibold sm:w-[200px] w-[100px]"
            value={maxrating}
            onChange={(e) => setmaxrating(e.target.value)}
          />
          <button
            className=" bg-red-400 py-2 px-3 rounded-md sm:w-[125px]"
            onClick={handlerating}
          >
            filter by rating
          </button>
        </div>

        {/* produccts specific */}
        {selectproduct ? (
          <section className="text-gray-600 mt-5 ">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-around flex-wrap gap-5">
              {products.map((item) => (
                <div
                  className="border-black border-4 mb-3 p-2 mx-3 "
                  key={item.id}
                >
                  <div className="block relative rounded overflow-hidden">
                    <Link
                      to={`/productdetails/${item.id}`}
                      // target="_blank"
                    >
                      <img
                        alt="ecommerce"
                        className="object-center w-full h-full block cursor-pointer"
                        src={item.thumbnail}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col mt-4 ">
                    <h3 className="text-black text-xs tracking-widest title-font mb-1">
                      {item.brand}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">₹{`${Math.round(item.price * 83)}`}</p>
                    <p className="mt-1">
                      <img
                        src={`../ratings/rating-${(
                          Math.round(item.rating) * 10
                        ).toFixed(0)}.png`}
                        alt=""
                        className="w-24"
                      />
                      rating: {item.rating}
                    </p>
                    <div className="flex items-center mx-auto gap-3 text-center cursor-pointer">
                      <button
                        className=" bg-blue-500 lg:py-2 lg:px-5 py-1 px-3 text-white rounded-lg relative bottom-0 mt-2"
                        onClick={() => notify(item)}
                      >
                        Add to Cart
                      </button>
                      <p onClick={() => notifyy(item)}>
                        <FaHeart size={25} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="text-gray-600 mt-5 ">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-around flex-wrap gap-5 ">
              {allproducts.map((item) => (
                <div
                  className="border-black border mb-3 p-2 mx-3 shadow-md "
                  key={item.id}
                >
                  <div className="block relative rounded overflow-hidden">
                    <Link
                      to={`/productdetails/${item.id}`}
                      // target="_blank"
                    >
                      <img
                        alt="ecommerce"
                        className="object-center w-full h-full block cursor-pointer"
                        src={item.thumbnail}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col mt-4 ">
                    <h3 className="text-black text-xs tracking-widest title-font mb-1">
                      {item.brand}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">₹{`${Math.round(item.price * 83)}`}</p>
                    <p className="mt-1">
                      <img
                        src={`../ratings/rating-${(
                          Math.round(item.rating) * 10
                        ).toFixed(0)}.png`}
                        alt=""
                        className="w-24"
                      />
                      rating: {item.rating}
                    </p>
                    <div className="flex items-center mx-auto gap-3 text-center cursor-pointer">
                      <button
                        className=" bg-blue-500 lg:py-2 lg:px-5 py-1 px-3 text-white rounded-lg relative bottom-0 mt-2"
                        onClick={() => notify(item)}
                      >
                        Add to Cart
                      </button>
                      <p onClick={() => notifyy(item)}>
                        <FaHeart size={25} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Toaster />
    </>
  );
}

export default Kitchen;

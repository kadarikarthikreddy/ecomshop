import React, { useState } from "react";
import { db } from "../../firebase/Firebase";
import toast, { Toaster } from "react-hot-toast";
import { collection, addDoc } from "firebase/firestore";

function ContactUs() {
  const [user, setuser] = useState({
    names: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!user.names || !user.email || !user.message) {
      return toast.error("All fields are required");
    } else {
      addDoc(collection(db, "User-Feedback"), {
        Name: user.names,
        Email: user.email,
        Message: user.message,
      })
        .then(() => {
          toast.success("Feedback Sent!");
          setuser({ names: "", email: "", message: "" });
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div className="pt-[80px]">
      <div>
        <h3 className="text-center font-bold text-4xl cursor-pointer my-3">
          Contact Us
        </h3>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%maneguda+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Maneguda Yamjal,Hyderabad,Telangana India
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  karthik@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input
                value={user.names}
                onChange={handleChange}
                type="text"
                name="names"
                id="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                value={user.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                onChange={handleChange}
                type="text"
                value={user.message}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
}

export default ContactUs;

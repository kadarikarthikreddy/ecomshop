import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AllProducts from "./components/Allproducts/AllProducts";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { useState } from "react";
import ProductDetails from "./pages/product/ProductDetails";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/Firebase";
import Kitchen from "./pages/kitchen/Kitchen";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/women/Womens";
import Favourite from "./pages/favourite/Favourite";

import ContactUs from "./components/contact/ContactUs";
// import Toaster from "react-hot-toast";

function App() {
  const [cart, setcart] = useState([]);
  const [fav, setfav] = useState([]);
  const [username, setusername] = useState("");
  // const [single, setsingle] = useState([]);
  const Addtocart = (product) => {
    const isproduct = cart.find((finditem) => finditem.id === product.id);
    if (isproduct) {
      const updatequantity = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setcart(updatequantity);
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handleInc = (i) => {
    const incQuantity = cart.map((item) =>
      item.id === i ? { ...item, quantity: item.quantity + 1 } : item
    );

    setcart(incQuantity);
  };
  const handleDec = (i) => {
    const decQuantity = cart.map((item) =>
      item.id === i && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setcart(decQuantity);
  };
  const handleRemove = (i) => {
    const remove = cart.filter((item) => item.id !== i);
    setcart(remove);
  };

  const getTotalprice = () => {
    const totalprice = cart.reduce((total, cost) => {
      return total + cost.price * cost.quantity;
    }, 0);
    return totalprice;
  };
  // favourite
  const Addtofav = (product) => {
    const isproduct = fav.find((finditem) => finditem.id === product.id);
    if (isproduct) {
      const updatequantity = fav.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setfav(updatequantity);
    } else {
      setfav([...fav, { ...product, quantity: 1 }]);
    }
  };

  const handleIncc = (i) => {
    const incQuantity = fav.map((item) =>
      item.id === i ? { ...item, quantity: item.quantity + 1 } : item
    );

    setfav(incQuantity);
  };
  const handleDecc = (i) => {
    const decQuantity = fav.map((item) =>
      item.id === i && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setfav(decQuantity);
  };
  const handleRemovee = (i) => {
    const remove = fav.filter((item) => item.id !== i);
    setfav(remove);
  };

  // username
  useEffect(() => {
    auth.onAuthStateChanged((users) => {
      if (users) {
        setusername(users.displayName);
      } else {
        setusername("");
      }
    });
  }, []);
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} username={username} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleInc={handleInc}
                  handleDec={handleDec}
                  handleRemove={handleRemove}
                  getTotalprice={getTotalprice}
                />
              }
            />

            <Route
              path="/favourites"
              element={
                <Favourite
                  fav={fav}
                  handleRemovee={handleRemovee}
                  Addtocart={Addtocart}
                />
              }
            />

            <Route
              path="/allproducts"
              element={
                <AllProducts Addtocart={Addtocart} Addtofav={Addtofav} />
              }
            />
            <Route
              path="/productdetails/:id"
              element={
                <ProductDetails Addtocart={Addtocart} Addtofav={Addtofav} />
              }
            />
            <Route
              path="/mens"
              element={<Mens Addtocart={Addtocart} Addtofav={Addtofav} />}
            />
            <Route
              path="/womens"
              element={<Womens Addtocart={Addtocart} Addtofav={Addtofav} />}
            />
            <Route
              path="/kitchen"
              element={<Kitchen Addtocart={Addtocart} Addtofav={Addtofav} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          {/* <Toaster /> */}
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { setCurrentUserAsync } from "./redux/user/user-actions";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInPage from "./pages/sign-in/SignInPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUserAsync());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;

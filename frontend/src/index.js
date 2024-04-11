import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import HomePage from "./pages/HomePage";
import ProductScreen from "./pages/ProductScreen";
import { CartScreen } from "./pages/CartScreen";
import { LoginScreen } from "./pages/LoginScreen";
import { RegisterScreen } from "./pages/RegisterScreen";
import ShippingScreen from "./pages/ShippingScreen";
import { PrivateRoute } from "./pages/PrivateRoute";
import { PaymentScreen } from "./pages/PaymentScreen";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="product/:id" element={<ProductScreen />} />
      <Route path="cart" element={<CartScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="shipping" element={<ShippingScreen />} />
      </Route>
      <Route path="" element={<PrivateRoute />}>
        <Route path="payment" element={<PaymentScreen />} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

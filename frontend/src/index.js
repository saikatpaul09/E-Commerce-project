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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route index={true} path="product/:id" element={<ProductScreen />} />
      <Route index={true} path="cart" element={<CartScreen />} />
      <Route index={true} path="login" element={<LoginScreen />} />
      <Route index={true} path="register" element={<RegisterScreen />} />
      <Route index={true} path="shipping" element={<>ss</>} />
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

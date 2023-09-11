import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./Context/CategoryContext";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import { FilterProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";
import { WishProvider } from "./Context/WishListContext";
import { SidebarTogglerProvider } from "./Context/SidebarToggleContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <SidebarTogglerProvider>
      <WishProvider>
        <CartProvider>
          <FilterProvider>
            <ProductProvider>
              <CategoryProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </CategoryProvider>
            </ProductProvider>
          </FilterProvider>
        </CartProvider>
      </WishProvider>
    </SidebarTogglerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

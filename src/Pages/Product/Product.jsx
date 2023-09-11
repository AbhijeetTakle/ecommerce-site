import "./Product.css";
import { ProductList } from "../../Components/ProductList/ProductList";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

const Product = () => {
  return (
    <div className="product">
      <Sidebar />
      <ProductList />
    </div>
  );
};

export { Product };

import { useFilter } from "../../Context/FilterContext";
import { useProduct } from "../../Context/ProductContext";
import { useSidebar } from "../../Context/SidebarToggleContext";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";
const ProductList = () => {
  const { productList } = useProduct();
  const { state } = useFilter();
  const { showSidebar } = useSidebar();
  const filterByPrice = (products, sortByPrice) => {
    if (sortByPrice === "lowToHigh") {
      return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortByPrice === "highToLow") {
      return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }
    return products;
  };
  const filterByRating = (products, rating) => {
    return products.filter((obj) => obj.rating >= rating);
  };

  const filterByCategory = (products, category) => {
    if (category.length !== 0) {
      return products.filter((item) => category.includes(item.categoryName));
    }
    return products;
  };
  const filteredProducts = filterByRating(
    filterByCategory(
      filterByPrice([...productList], state.sortByPrice),
      state.category
    ),
    state.rating
  );

  return (
    <div>
      <div
        style={{ marginLeft: !showSidebar ? "0.5rem" : "" }}
        className="container"
      >
        <h1>Showing All Products ({filteredProducts.length})</h1>
        <div className="products">
          {filteredProducts.map((productInfo) => {
            return <ProductCard productInfo={productInfo} />;
          })}
        </div>
      </div>
    </div>
  );
};
export { ProductList };

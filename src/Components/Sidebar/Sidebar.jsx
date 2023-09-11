import { Link } from "react-router-dom";
import { useFilter } from "../../Context/FilterContext";
import { useSidebar } from "../../Context/SidebarToggleContext";

import "./Sidebar.css";

const Sidebar = () => {
  const { state, dispatch } = useFilter();
  const { showSidebar } = useSidebar();
  return (
    <div>
      <div className="main">
        {showSidebar && (
          <div className="filter-bar">
            <div className="filter-head">
              <h3>
                <span>Home/</span>product
              </h3>
            </div>
            <h4>Sort by</h4>
            <div className="sort">
              <div className="filter-by-size">
                <label>
                  <input
                    className="radio"
                    type="radio"
                    name="sort"
                    checked={state.sortByPrice === "lowToHigh"}
                    value={state.sortByPrice}
                    onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                  />
                  <span>Price- Low to High</span>
                </label>
                <label>
                  <input
                    className="radio"
                    type="radio"
                    name="sort"
                    value={state.sortByPrice}
                    checked={state.sortByPrice === "highToLow"}
                    onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                  />
                  <span>Price- High to Low</span>
                </label>
              </div>
            </div>

            <h4>Filter by Brands</h4>
            <div className="size">
              <div className="filter-by-size">
                <label>
                  <input
                    type="checkbox"
                    name="category-filter"
                    checked={state.category.includes("addidas")}
                    onChange={() =>
                      dispatch({ type: "CATEGORY", payload: "addidas" })
                    }
                  />
                  <span>Adidas</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="category-filter"
                    checked={state.category.includes("air-jordan")}
                    onChange={() =>
                      dispatch({ type: "CATEGORY", payload: "air-jordan" })
                    }
                  />
                  <span>Air Jordan</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="category-filter"
                    checked={state.category.includes("nike")}
                    onChange={() =>
                      dispatch({ type: "CATEGORY", payload: "nike" })
                    }
                  />
                  <span>Nike</span>
                </label>
              </div>
            </div>
            <h4>Filter by Rating</h4>
            <div className="price-range-star">
              <p> 1 ⭐</p>
              <p> 2 ⭐</p>
              <p> 3 ⭐</p>
              <p> 4 ⭐</p>
              <p> 5 ⭐</p>
            </div>
            <div className="price-range">
              <input
                className="input"
                type="range"
                min="1"
                max="5"
                step="1"
                value={state.rating}
                onChange={(e) =>
                  dispatch({ type: "RANGE", payload: e.target.value })
                }
              />
              <div className="range value"></div>
            </div>
            <button className="btn" onClick={() => dispatch({ type: "CLEAR" })}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export { Sidebar };

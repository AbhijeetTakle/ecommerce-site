import { createContext } from "react";
import { useContext, useReducer } from "react";

const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  const filterManagement = (state, action) => {
    switch (action.type) {
      case "LOW_TO_HIGH":
        return { ...state, sortByPrice: "lowToHigh" };
      case "HIGH_TO_LOW":
        return { ...state, sortByPrice: "highToLow" };
      case "RANGE":
        return { ...state, rating: action.payload };
      case "CATEGORY":
        return {
          ...state,
          category: state.category.includes(action.payload)
            ? state.category.filter((value) => value !== action.payload)
            : [...state.category, action.payload],
        };
      case "CLEAR":
        return {
          rating: "",
          sortByPrice: "",
          category: [],
        };
    }
  };

  const initialValues = {
    rating: "1",
    sortByPrice: "",
    category: [],
  };
  const [state, dispatch] = useReducer(filterManagement, initialValues);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };

import { createContext, useContext, useEffect, useState } from "react";
const { default: axios } = require("axios");

const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const categories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategoryList(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    categories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categoryList, setCategoryList }}>
      {children}
    </CategoryContext.Provider>
  );
};
const useCategory = () => useContext(CategoryContext);
export { CategoryProvider, useCategory };

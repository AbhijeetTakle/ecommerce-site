import { createContext, useState, useContext } from "react";

const sidebarTogglerContext = createContext();
const SidebarTogglerProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarToggler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <sidebarTogglerContext.Provider value={{ showSidebar, sidebarToggler }}>
      {children}
    </sidebarTogglerContext.Provider>
  );
};
const useSidebar = () => useContext(sidebarTogglerContext);
export { SidebarTogglerProvider, useSidebar };

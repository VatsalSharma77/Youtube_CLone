import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectedCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(true);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        mobileMenu, setMobileMenu ,
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectedCategories,
        
      }}
    >
      
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
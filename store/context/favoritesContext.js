import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [currentMealsIds, setCurrentMealsIds] = useState([]);

  const addFavorite = (id) => {
    setCurrentMealsIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setCurrentMealsIds((prev) => prev.filter((ids) => ids !== id));
  };

  const value = {
    ids: currentMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;

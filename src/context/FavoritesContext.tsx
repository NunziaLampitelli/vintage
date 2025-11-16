import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

type FavoritesContextType = {
  favorites: number[];
  toggleFavorite: (productId: number) => void;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
});

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    fetch("http://localhost:8088/vintage/favorites.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get", user_id: user.id }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFavorites(data.favorites.map((p: any) => p.id));
        }
      })
      .catch(err => console.error("Error fetching favorites:", err));
  }, [user]);

  const toggleFavorite = async (productId: number) => {
    if (!user) return;

    const isFavorited = favorites.includes(productId);
    const action = isFavorited ? "remove" : "add";

    try {
      const res = await fetch("http://localhost:8088/vintage/favorites.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action,
          user_id: user.id,
          product_id: productId,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setFavorites(prev =>
          isFavorited ? prev.filter(id => id !== productId) : [...prev, productId]
        );
      } else {
        console.error("Error updating favorites:", data.message);
      }
    } catch (err) {
      console.error("Error connecting to server:", err);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

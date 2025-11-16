import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import "./favorites.css"

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const { user } = useAuth();
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;

    fetch("http://localhost:8088/vintage/favorites.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get", user_id: user.id }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) setFavoriteProducts(data.favorites);
      })
      .catch(err => console.error("Error fetching favorites:", err));
  }, [user, favorites]); 

  return (
    <div className="favorites-page">
      <h1>Your Favorites ❤️</h1>

      {favoriteProducts.length === 0 && <p>You have no favorite products yet.</p>}

      <section>
        {favoriteProducts.map((shirt) => (
          <article key={shirt.id} className="favorite-item">
            <img src={`http://localhost:8088/vintage/${shirt.image_path}`} alt={shirt.name} />
            <p>{shirt.name}</p>
            <span>{Number(shirt.price).toFixed(2)} kr</span>

            <button onClick={() => toggleFavorite(shirt.id)} className="remove-btn">
              Remove 💔
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

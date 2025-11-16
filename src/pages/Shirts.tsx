import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import "./shirts.css";
import type { Product } from "../interfaces/Product";

export default function Shirts() {
  const { favorites, toggleFavorite } = useFavorites();
  const { user } = useAuth();

  const [shirts, setShirts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:8088/vintage/products.php?category=shirts")
      .then(res => res.json())
      .then(data => {
        const products = data.products.map((p: Product) => ({
          ...p,
          price: Number(p.price),
        }));
        setShirts(products);
      })
      .catch(err => console.error("Error fetching shirts:", err));
  }, []);

  return (
    <div className="shirts-page">
      <h1>Shirts</h1>

      <section>
        {shirts.map(shirt => (
          <article key={shirt.id} className="shirts">
            
            <img
              src={`http://localhost:8088/vintage/${shirt.image_path}`}
              alt={shirt.name}
            />

            <p>{shirt.name}</p>
            <span>{shirt.price.toFixed(2)} kr</span>

            {user && (
              <button
                className={favorites.includes(shirt.id) ? "favorited" : ""}
                onClick={() => toggleFavorite(shirt.id)}
              >
                {favorites.includes(shirt.id) ? "💖 Remove" : "🤍 Add to favorites"}
              </button>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

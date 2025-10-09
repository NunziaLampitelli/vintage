import { shirts } from "../data/product"
import "./shirts.css"

export default function Shirts() {
  return (
    <div className="shirts-page">     
      <h1>Shirts</h1>
      <section>
        {shirts.map((shirt) => (
          <article key={shirt.id} className="shirts">
            <img src={shirt.image} alt={shirt.name} />
            <p>{shirt.name}</p>
            <span>{shirt.price.toFixed(2)}kr</span>
          </article>
        ))}
      </section>
    </div>
  )
}

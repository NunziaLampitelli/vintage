import type { Product } from "../interfaces/Product"
import Shirt1 from "../assets/shirt1.jpg"
import Shirt2 from "../assets/shirt2.jpg"
import Shirt3 from "../assets/shirt3.jpg"

export const shirts: Product[] = [
  { id: 1, image: Shirt1, name: "Shirt One", price: 29.99 },
  { id: 2, image: Shirt2, name: "Shirt Two", price: 34.99 },
  { id: 3, image: Shirt3, name: "Shirt Three", price: 39.99 },
]

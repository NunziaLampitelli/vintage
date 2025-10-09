import "./products.css"
import pic1 from "../assets/flower-green-svgrepo-com.svg"
import pic2 from "../assets/flower-orange-3-svgrepo-com.svg"
import pic3 from "../assets/yellow-flower-2-svgrepo-com.svg"
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="products-page">
     
          <h1>Categories</h1>
            <p> Take a look!</p>
        <section>
          <article className="category">
            <Link to="/Shirts">
            <img src={pic1} alt="" />
            <p>Shirts</p>
            </Link>
          </article>
          <article className="category">
            <Link to="/Jeans">
            <img src={pic2} alt="" />
            <p>Jeans</p>
            </Link>
          </article>

          <article className="category">
            <Link to="/Shirts">
            <img src={pic3} alt="" />
            <p>Dresses</p>
            </Link>
          </article>
        </section>
      </div>
    </>
  );
}

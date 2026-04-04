import { useState } from "react";

function ProductCard({ title, price, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
      <button className="favorite-btn" onClick={() => setIsFavorite(!isFavorite)}>
        {/* {isFavorite ? "Unfavorite" : "Favorite"} */}
        {isFavorite ? "♥" : "♡"}
      </button>
    </div>
  );
}

export default ProductCard;
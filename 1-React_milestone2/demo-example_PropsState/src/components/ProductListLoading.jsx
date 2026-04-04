import { useState, useEffect } from "react";

function ProductListLoading() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      /* here we add an intentional delay to see the loading effect */
      setTimeout(() => {
        setProducts(data.products);
        setLoading(false);
      }, 3500);
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{fontSize: "24px", color: "goldenrod"}}>Loading products...</p>;
  }

  return (
    <>
      <ul>
        {/* all products without slicing the first 8 items
         {products.map((product) => ( */}

        {products.slice(0, 8).map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      {/* pick more fields to display   */}
      <div className="product-grid">
        {products.slice(0, 8).map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.thumbnail}
              alt={product.title}
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            {/* <p>Stock: {product.stock}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductListLoading;

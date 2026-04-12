import { useState, useEffect } from "react";  // useState is needed for updating the products list and useEffect is used for fetching API (dummyJSON) 


function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
    //   const response = await fetch("https://fakestoreapi.com/products");
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
    //   setProducts(data);
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  return (
    <>
    {/* very basic list of the products */}
    <ul>
      {/* {products.map((product) => ( */}
      {products.slice(0,8).map((product) => (
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

export default ProductList;
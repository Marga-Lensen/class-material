import ProductCard from "./components/ProductCard"; // render ProductCard component
import { products } from "./data/products"; // second way uses this import
import Logger from "./components/Logger"; // demonstrates useEffect
import ProductList from "./components/ProductList"; // fetching done in ProductList component
import ProductListLoading from "./components/ProductListLoading";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Our Products</h1>

      {/* first: hardcoded props */}
      <h2>1. via props</h2>
      <div className="products-props">
        <ProductCard
          title="Wireless Headphones"
          price={79.99}
          image="../src/assets/headphones.png"
        />
        <ProductCard
          title="Mechanical Keyboard"
          price={99.99}
          image="../src/assets/keyboard.png"
        />
        <ProductCard
          title="Smart Water Bottle"
          price={24.99}
          image="../src/assets/smart-bottle.png"
        />
        <ProductCard
          title="Backpack"
          price={49.99}
          image="../src/assets/backpack.png"
        />
      </div>
      <hr />
      {/* second: mapping from array */}
      <h2>2. via mapping over the array</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <hr />
      {/* simple Logger demonstrating useEffect */}

      <Logger />
      <hr />

      {/* third: listing products after fetching
      ProductList uses useEffect and fetch */}
      <h2>3. via fetching from dummyJSON API</h2>

      <ProductList />
      <hr />
      {/* Bonus: fetching products with a loading ... state */}
      <ProductListLoading />
    </div>
  );
}

export default App;

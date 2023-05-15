
import React, { useState } from "react";
import IProduct, {
	IProductCreate,
	IProductUpdate,
} from "./models/product.model";
import { setAllProducts, addProduct, viewProduct, updateProduct, hardDeleteProduct } from "./controllers/product.controller";
import { ProductCard } from "./components/product-card/product-card";
import { NewItem } from "./components/new-item/new-item";
import { SideBar } from "./components/side-bar/side-bar";
import "./app.css";
import { ProductSearchBar } from "./components/product-search-bar/product-search-bar"; 

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const testCreate: IProductCreate = {
    name: "testCreate 3",
    price: 100,
    stock: 1,
    is_active: true,
    category: 4,
    brand: 2,
  };

  React.useEffect(() => {
    setAllProducts(setProducts);
  }, []);


  return (
    <div>
      {/* <button  onClick={() => addProduct(testCreate)}> Crear </button> */}
      {products.map((product: IProduct) => (
        <p key={product.id}>
          {product.id} {product.name} {product.category.name} {product.brand.name}{" "} {product.is_active}
          <button onClick={() => viewProduct(product, setProduct) }> view product </button>{" "}
          <button onClick={() => updateProduct(product, true)}> soft delete </button>{" "}
          <button onClick={() => hardDeleteProduct(product)}> delete </button>{" "}
        </p>
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import IProduct, { IProductUpdate } from "./models/product.model";
import { setAllProducts, viewProduct, softDelete, hardDelete, update } from "./controllers/product.controller";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const testCreate: IProductUpdate = {
    id: 0,
    name: "testCreate 2",
    price: 100,
    stock: 1,
    is_active: 1,
    category: 4,
    brand: 2,
  };

  React.useEffect(() => {
    setAllProducts(setProducts);
  }, []);


  return (
    <div>
      <button  onClick={() => createProduct(testCreate)}> Crear </button>
      {products.map((product: IProduct) => (
        <p key={product.id}>
          {product.id} {product.name} {product.category.name} {product.brand.name}{" "} {product.is_active}
          <button onClick={() => viewProduct(product, setProduct) }> view product </button>{" "}
          <button onClick={() => softDelete(product)}> soft delete </button>{" "}
          <button onClick={() => softDelete(product)}> delete </button>{" "}
        </p>
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import IProduct from "./models/product.model";
import { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } from './endpoints/product.endopint';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const testCreate: IProduct = {
    name: "testCreate 2",
    price: 100,
    stock: 1,
    is_active: 1,
    category: {
      id: 4,
    },
    brand: {
      id: 2,
    },
  };

  React.useEffect(() => {
    getAllProducts().then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  const viewProduct = (productData: IProduct) => {
    setProduct(productData);
  };

  const softDelete = (productData: IProduct)=> {
    setProduct(productData);
    product.is_active = 0;
    updateProduct(product);
  };

  return (
    <div>
      <button  onClick={() => createProduct(testCreate)}> Crear </button>
      {products.map((product: IProduct) => (
        <p key={product.id}>
          {product.id} {product.name} {product.category.name} {product.brand.name}{" "} {product.is_active}
          <button onClick={() => viewProduct(product)}> view product </button>{" "}
          <button onClick={() => softDelete(product)}> soft delete </button>{" "}
          <button onClick={() => deleteProduct(product)}> delete </button>{" "}
        </p>
      ))}
    </div>
  );
}

export default App;

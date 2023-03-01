import React, {useState} from 'react'
import IProduct from './models/product.model';
import { getAllProducts } from './endpoints/product.endopint';

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  React.useEffect(() => {

    getAllProducts().then((data) => {
      if(data){
        setProducts(data);
      }
    });

  }, [])

  const viewProduct = (data: IProduct) => {
    console.log(data);
  };

  return (
    <div>
      {products.map((product: IProduct) => (
        <p key={product.id}>{product.id} {product.category.name} {product.brand.name}  <button  onClick={() => viewProduct(product)} > view product </button> </p>
      ))}

    </div>

  );

  
}

export default App;

import React, {useState} from 'react'
import api from './api/api'
import IProduct from './models/product.model';

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  React.useEffect(() => {

    api.get('product').then((response) => {

      console.log(response.data);
      setProducts(response.data);

    }).catch(error => {
      console.log(error)
    });

  }, [])


  return (
    <div>
      {products.map((product: IProduct) => (
        <p key={product.id}>{product.name}{product.category.name}{product.brand.name}</p>
      ))}
    </div>
  );

  
}

export default App;

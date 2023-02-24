import * as React from 'react';
import api from './api/api'

function App() {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {

    getData();

  }, [])

  const getData = () => { 

    api.get('product').then((response: any) => {

      console.log(response.data);
      setProducts(response.data);
      console.log(products);

    }).catch(error => {
      console.log(error)
    });

  }

  return (
    <h1>ayudaaaaaaaaaaa</h1>
  );
}

export default App;

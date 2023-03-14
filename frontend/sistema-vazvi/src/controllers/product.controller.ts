import { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } from '../endpoints/product.endopint';
import IProduct, {IProductCreate, IProductUpdate} from '../models/product.model';

export function setAllProducts(setProducts: any) {
    getAllProducts().then((data) => {
        if (data) {
          setProducts(data);
        }
      });
}

export function viewProduct(product: IProduct, setProduct: any){
    setProduct(product);
    console.log(product);
}

export function postProduct(product: IProductCreate){
    
}

export function softDelete(product: IProduct) {
    product.is_active = 0;
    updateProduct(product);
  };

  export function hardDelete(product: IProduct) {
    deleteProduct(product);
  } 

  export function update(product: IProductUpdate) {
    updateProduct(product);
  }




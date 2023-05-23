import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/product.endopint';
import IProduct, {IProductCreate, IProductUpdate} from '../models/product.model';
import { toast } from 'react-toastify';

type SetProductsType = Dispatch<SetStateAction<IProduct[]>>;
type SetProductType = Dispatch<SetStateAction<IProduct | undefined>>;
type setModalOpen = Dispatch<SetStateAction<boolean>>;

export function setAllProducts(setProducts: SetProductsType, categoryId: number | undefined, brandId: number | undefined, searchFilter: string | undefined) {
    getAll(categoryId, brandId, searchFilter).then((data) => {
        if (data) {
          setProducts(data);
        }
      });
}

export function viewProduct(product: IProduct, setProduct: SetProductType, setIsOpen: setModalOpen){
    setProduct(product);
    setIsOpen(true);
}

export function addProduct(product: IProductCreate){
  create(product)
  .then(() => {
    toast.success('Producto añadido exitosamente');
  })
  .catch(error => {
    toast.error('Error al agregar el producto', error);
  });

}

export function hardDeleteProduct(product: IProduct) {
  remove(product)
} 

export function softDeleteProduct(product: IProduct) {

  const updatedProduct: IProductUpdate = {
    id: product.id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category.id,
    brand: product.brand.id,
    is_active: false,
  }

  update(updatedProduct)
  .then(() => {
    toast.success('Producto fue eliminado exitosamente');
  })
  .catch(error => {
    toast.error('Error al eliminar el producto', error.message);
  });
}

export function updateProduct(id:number, product: IProductCreate) {

  const updatedProduct: IProductUpdate = {
    id: id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category,
    brand: product.brand,
    is_active: product.is_active,
  }

  update(updatedProduct)
  .then(() => {
    toast.success('Producto actualizado exitosamente');
  })
  .catch(error => {
    toast.error('Error al actualizar el producto', error);
  });
}




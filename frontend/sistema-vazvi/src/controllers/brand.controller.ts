import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/brand.endpoint';
import IBrand, {IBrandCreate, IBrandUpdate} from '../models/brand.model';

type SetBrandsType = Dispatch<SetStateAction<IBrand[]>>;
type SetBrandType = Dispatch<SetStateAction<IBrand>>;

export function setAllBrands(setBrands: SetBrandsType) {
    getAll().then((data) => {
        if (data) {
          setBrands(data);
        }
      });
}

export function viewBrand(brand: IBrand, setBrand: SetBrandType){
    setBrand(brand);
    console.log(brand);
}

export function addBrand(brand: IBrandCreate){
    create(brand);
}

export function hardDeleteBrand(brand: IBrand) {
  remove(brand);
} 

// export function updateBrand(brand: IBrand, option:boolean) {

//   const updatedBrand: IBrandUpdate = {
//     id: brand.id,
//     name: brand.name,
//     price: brand.price,
//     stock: brand.stock,
//     category: brand.category.id,
//     brand: brand.brand.id,
//     is_active: brand.is_active,
//   }

//   if(option){//Enters if its a soft delete
//     updatedBrand.is_active = 0;
//   }

//   update(updatedBrand);
// }




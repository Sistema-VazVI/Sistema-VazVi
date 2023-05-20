import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/brand.endpoint';
import IBrand, {IBrandCreate, IBrandUpdate} from '../models/brand.model';

type SetBrandsType = Dispatch<SetStateAction<IBrand[]>>;
type SetBrandType = Dispatch<SetStateAction<IBrand | undefined>>;
type setModalOpen = Dispatch<SetStateAction<boolean>>;

export function setAllBrands(setBrands: SetBrandsType) {
    getAll().then((data) => {
        if (data) {
          setBrands(data);
        }
      });
}

export function viewBrand(brand: IBrand, setBrand: SetBrandType, setIsOpen: setModalOpen) {
    setBrand(brand);
    setIsOpen(true);
}

export function addBrand(brand: IBrandCreate){
    create(brand);
}

export function hardDeleteBrand(brand: IBrand) {
  remove(brand);
} 

export function updateBrand(id: number, brand: IBrandCreate) {

  const updatedBrand: IBrandUpdate = {
    id: id,
    name: brand.name,
  }

  update(updatedBrand);
}




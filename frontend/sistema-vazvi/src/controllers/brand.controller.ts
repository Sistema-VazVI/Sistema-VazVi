import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/brand.endpoint';
import IBrand, {IBrandCreate, IBrandUpdate} from '../models/brand.model';
import { toast } from 'react-toastify';

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
    create(brand)
    .then(() => {
      toast.success('Linea añadida exitosamente');
    })
    .catch(error => {
      toast.error('Error al agregar la linea', error);
    });
}

export function hardDeleteBrand(brand: IBrand) {
  remove(brand);
} 

export function updateBrand(id: number, brand: IBrandCreate) {

  const updatedBrand: IBrandUpdate = {
    id: id,
    name: brand.name,
  }

  update(updatedBrand)
  .then(() => {
    toast.success('Linea actualizada exitosamente');
  })
  .catch(error => {
    toast.error('Error al actualizar la linea', error);
  });
}




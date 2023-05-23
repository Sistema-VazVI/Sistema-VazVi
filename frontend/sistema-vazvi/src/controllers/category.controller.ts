import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/category.endpoint';
import ICategory, {ICategoryCreate, ICategoryUpdate} from '../models/category.model';
import { toast } from 'react-toastify';

type SetCategorysType = Dispatch<SetStateAction<ICategory[]>>;
type SetCategoryType = Dispatch<SetStateAction<ICategory | undefined>>;
type setModalOpen = Dispatch<SetStateAction<boolean>>;

export function setAllCategories(setCategorys: SetCategorysType) {
    getAll().then((data) => {
        if (data) {
          setCategorys(data);
        }
      });
}

export function viewCategory(category: ICategory, setCategory: SetCategoryType, setIsOpen: setModalOpen) {
    setCategory(category);
    setIsOpen(true);
}

export function addCategory(category: ICategoryCreate){
    create(category)
    .then(() => {
      toast.success('Categoría añadida exitosamente');
    })
    .catch(error => {
      toast.error('Error al agregar la categoría', error);
    });
}

export function hardDeleteCategory(category: ICategory) {
  remove(category);
} 

export function softDeleteCategory(category: ICategory) {

  const updatedCategory: ICategoryUpdate = {
    id: category.id,
    name: category.name,
    is_active: false,
  }

  update(updatedCategory)
  .then(() => {
    toast.success('Categoría eliminada exitosamente');
  })
  .catch(error => {
    toast.error('Error al eliminar la categoría', error);
  });
}


export function updateCategory(id: number, category: ICategoryCreate) {

  const updatedCategory: ICategoryUpdate = {
    id: id,
    name: category.name,
    is_active: category.is_active,
  }

  update(updatedCategory)
  .then(() => {
    toast.success('Categoría actualizada exitosamente');
  })
  .catch(error => {
    toast.error('Error al actualizar la categoría', error);
  });
}




import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/category.endpoint';
import ICategory, {ICategoryCreate, ICategoryUpdate} from '../models/category.model';

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
    create(category);
}

export function hardDeleteCategory(category: ICategory) {
  remove(category);
} 

export function updateCategory(id: number, category: ICategoryCreate) {

  const updatedCategory: ICategoryUpdate = {
    id: id,
    name: category.name,
    is_active: category.is_active,
  }

  update(updatedCategory);
}




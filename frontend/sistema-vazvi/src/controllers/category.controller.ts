import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/category.endpoint';
import ICategory, {ICategoryCreate, ICategoryUpdate} from '../models/category.model';

type SetCategorysType = Dispatch<SetStateAction<ICategory[]>>;
type SetCategoryType = Dispatch<SetStateAction<ICategory>>;

export function setAllCategories(setCategorys: SetCategorysType) {
    getAll().then((data) => {
        if (data) {
          setCategorys(data);
        }
      });
}

export function viewCategory(category: ICategory, setCategory: SetCategoryType){
    setCategory(category);
    console.log(category);
}

export function addCategory(category: ICategoryCreate){
    create(category);
}

export function hardDeleteCategory(category: ICategory) {
  remove(category);
} 

// export function updateCategory(category: ICategory, option:boolean) {

//   const updatedCategory: ICategoryUpdate = {
//     id: category.id,
//     name: category.name,
//     price: category.price,
//     stock: category.stock,
//     category: category.category.id,
//     brand: category.brand.id,
//     is_active: category.is_active,
//   }

//   if(option){//Enters if its a soft delete
//     updatedCategory.is_active = 0;
//   }

//   update(updatedCategory);
// }




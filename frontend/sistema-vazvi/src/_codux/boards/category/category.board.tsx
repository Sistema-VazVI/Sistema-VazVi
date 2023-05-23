import { createBoard } from '@wixc3/react-board';
import { Category } from '../../../components/category/category';
import ICategory from '../../../models/category.model';
import { Dispatch, SetStateAction } from 'react';

const category: ICategory = {} as ICategory;
const setCategory: Dispatch<SetStateAction<ICategory | undefined>> = {} as Dispatch<SetStateAction<ICategory| undefined>>;
const setIsOpen: Dispatch<SetStateAction<boolean>> = {} as Dispatch<SetStateAction<boolean>>;


export default createBoard({
    name: 'Category',
    Board: () => <Category category={category} setCategory={setCategory} setIsOpen={setIsOpen}/>
});

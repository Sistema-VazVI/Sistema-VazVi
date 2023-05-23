import { createBoard } from '@wixc3/react-board';
import { NewCategoryForm } from '../../../components/new-category-form/new-category-form';
import ICategory from '../../../models/category.model';

const category: ICategory | undefined = {} as ICategory

export default createBoard({
    name: 'NewCategoryForm',
    Board: () => <NewCategoryForm category={category}/>
});

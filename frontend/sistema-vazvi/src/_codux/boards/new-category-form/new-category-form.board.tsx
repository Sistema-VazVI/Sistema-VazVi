import { createBoard } from '@wixc3/react-board';
import { NewCategoryForm } from '../../../components/new-category-form/new-category-form';

export default createBoard({
    name: 'NewCategoryForm',
    Board: () => <NewCategoryForm />
});

import { createBoard } from '@wixc3/react-board';
import { NewLineCategory } from '../../../components/new-line-category/new-line-category';

export default createBoard({
    name: 'NewLineCategory',
    Board: () => <NewLineCategory />
});

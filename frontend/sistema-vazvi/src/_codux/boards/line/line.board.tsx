import { createBoard } from '@wixc3/react-board';
import { Line } from '../../../components/category/category';

export default createBoard({
    name: 'Category',
    Board: () => <Line />
});

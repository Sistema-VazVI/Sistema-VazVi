import { createBoard } from '@wixc3/react-board';
import { Line } from '../../../components/line/line';

export default createBoard({
    name: 'Category',
    Board: () => <Line />
});

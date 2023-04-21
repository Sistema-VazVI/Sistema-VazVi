import { createBoard } from '@wixc3/react-board';
import { NewItem } from '../../../components/new-item/new-item';

export default createBoard({
    name: 'NewItem',
    Board: () => <NewItem />
});

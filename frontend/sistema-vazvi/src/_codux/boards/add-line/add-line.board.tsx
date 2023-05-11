import { createBoard } from '@wixc3/react-board';
import { AddLine } from '../../../components/add-line/add-line';

export default createBoard({
    name: 'AddLine',
    Board: () => <AddLine />
});

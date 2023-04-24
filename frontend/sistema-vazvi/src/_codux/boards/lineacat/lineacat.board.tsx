import { createBoard } from '@wixc3/react-board';
import { Lineacat } from '../../../components/lineacat/lineacat';

export default createBoard({
    name: 'Lineacat',
    Board: () => <Lineacat />
});

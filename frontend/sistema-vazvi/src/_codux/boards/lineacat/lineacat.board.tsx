import { createBoard } from '@wixc3/react-board';
import { Lineacat } from '../../../components/lineacat/lineacat';

export default createBoard({
    name: 'Line',
    Board: () => <Lineacat />
});

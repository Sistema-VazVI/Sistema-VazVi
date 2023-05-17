import { createBoard } from '@wixc3/react-board';
import { Lineacat } from '../../../components/line/line';

export default createBoard({
    name: 'Line',
    Board: () => <Lineacat />
});

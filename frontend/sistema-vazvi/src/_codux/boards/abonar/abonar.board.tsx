import { createBoard } from '@wixc3/react-board';
import { Abonar } from '../../../components/abonar/abonar';

export default createBoard({
    name: 'Abonar',
    Board: () => <Abonar />
});

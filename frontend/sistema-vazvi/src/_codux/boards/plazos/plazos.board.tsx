import { createBoard } from '@wixc3/react-board';
import { Plazos } from '../../../components/plazos/plazos';

export default createBoard({
    name: 'Plazos',
    Board: () => <Plazos />
});

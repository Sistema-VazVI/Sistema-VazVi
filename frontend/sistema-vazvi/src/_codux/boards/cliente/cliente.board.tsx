import { createBoard } from '@wixc3/react-board';
import { Cliente } from '../../../components/cliente/cliente';

export default createBoard({
    name: 'Cliente',
    Board: () => <Cliente />
});

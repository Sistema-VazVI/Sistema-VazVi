import { createBoard } from '@wixc3/react-board';
import { FinalizarVenta } from '../../../components/finalizar-venta/finalizar-venta';

export default createBoard({
    name: 'FinalizarVenta',
    Board: () => <FinalizarVenta />
});

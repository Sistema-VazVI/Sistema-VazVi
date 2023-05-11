import { createBoard } from '@wixc3/react-board';
import { BtnAceptar } from '../../../components/btn-aceptar/btn-aceptar';

export default createBoard({
    name: 'BtnAceptar',
    Board: () => <BtnAceptar className="Btn" />
});

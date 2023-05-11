import { createBoard } from '@wixc3/react-board';
import { BtnCancel } from '../../../components/btn-cancel/btn-cancel';

export default createBoard({
    name: 'BtnCancel',
    Board: () => <BtnCancel />
});

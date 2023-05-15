import { createBoard } from '@wixc3/react-board';
import { NewClientForm } from '../../../components/new-client-form/new-client-form';

export default createBoard({
    name: 'NewClientForm',
    Board: () => <NewClientForm />
});

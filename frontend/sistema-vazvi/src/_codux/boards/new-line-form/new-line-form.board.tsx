import { createBoard } from '@wixc3/react-board';
import { NewLineForm } from '../../../components/new-line-form/new-line-form';

export default createBoard({
    name: 'NewLineForm',
    Board: () => <NewLineForm />
});

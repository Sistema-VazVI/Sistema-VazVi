import { createBoard } from '@wixc3/react-board';
import { AddClient } from '../../../components/add-client/add-client';

export default createBoard({
    name: 'AddClient',
    Board: () => <AddClient />
});

import { createBoard } from '@wixc3/react-board';
import { ClientSearch } from '../../../components/client-search/client-search';

export default createBoard({
    name: 'ClientSearch',
    Board: () => <ClientSearch />
});

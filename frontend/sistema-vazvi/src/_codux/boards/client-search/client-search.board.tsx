import { createBoard } from '@wixc3/react-board';
import { ClientSearch } from '../../../components/client-search/client-search';
import { Dispatch, SetStateAction } from 'react';

const searchFilter:  Dispatch<SetStateAction<string | undefined>> = {} as Dispatch<SetStateAction<string | undefined>>;

export default createBoard({
    name: 'ClientSearch',
    Board: () => <ClientSearch searchFilter={searchFilter}/>
});

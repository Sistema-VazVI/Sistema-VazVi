import { createBoard } from '@wixc3/react-board';
import { ClientCard } from '../../../components/client-card/client-card';
import IClient from '../../../models/client.model';
import { Dispatch, SetStateAction } from 'react';

const client: IClient = {} as IClient;
const setClient: Dispatch<SetStateAction<IClient | undefined>> = {} as Dispatch<SetStateAction<IClient | undefined>>;

export default createBoard({
    name: 'ClientCard',
    Board: () => <ClientCard client={client} setClient={setClient}/>,
    environmentProps: {
        canvasHeight: 162
    }
});

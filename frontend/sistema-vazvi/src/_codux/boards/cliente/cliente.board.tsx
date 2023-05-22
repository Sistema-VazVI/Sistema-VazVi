import { createBoard } from '@wixc3/react-board';
import { Cliente } from '../../../components/cliente/cliente';
import IClient from '../../../models/client.model';
import { Dispatch, SetStateAction } from 'react';


const clients: IClient[] = []
const setClient: Dispatch<SetStateAction<number>> = {} as Dispatch<SetStateAction<number>>

export default createBoard({
    name: 'Cliente',
    Board: () => <Cliente clients={clients} setClient={setClient}/>
});

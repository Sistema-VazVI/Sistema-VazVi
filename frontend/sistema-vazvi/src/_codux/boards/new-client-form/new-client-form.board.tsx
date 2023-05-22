import { createBoard } from '@wixc3/react-board';
import { NewClientForm } from '../../../components/new-client-form/new-client-form';
import IClient from '../../../models/client.model';

const client: IClient | undefined = {} as IClient;

export default createBoard({
    name: 'NewClientForm',
    Board: () => <NewClientForm client={client}/>
});

import { createBoard } from '@wixc3/react-board';
import Ticket from '../../../components/ticket/ticket';

export default createBoard({
    name: 'Ticket',
    Board: () => <Ticket ticket={{
        client: {
            debt: 1000,
            first_name: 'Prueba',
            id: 9,
            name: 'Hola',
            phone: '1231231234'
        },
        id: 3,
        is_payed: true,
        total: 1234
    }} />,
    environmentProps: {
        windowHeight: 503
    }
});

import { createBoard } from '@wixc3/react-board';
import Ticket from '../../../components/ticket/ticket';
import ITicket from '../../../models/ticket.model';

const ticket: ITicket = {} as ITicket;

export default createBoard({
    name: 'Ticket',
    Board: () => <Ticket  ticket={ticket}/>,
    environmentProps: {
        windowHeight: 503
    }
});

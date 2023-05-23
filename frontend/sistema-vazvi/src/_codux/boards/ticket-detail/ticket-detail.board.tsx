import { createBoard } from '@wixc3/react-board';
import { TicketDetail } from '../../../components/ticket-detail/ticket-detail';
import IitemTicket from '../../../models/item-ticket.model';

const items: IitemTicket[] = [];
const total: number = 0;
const ticketID: number = 0;

export default createBoard({
    name: 'TicketDetail',
    Board: () => <TicketDetail ticketID={ticketID} items={items} total = {total}/>
});

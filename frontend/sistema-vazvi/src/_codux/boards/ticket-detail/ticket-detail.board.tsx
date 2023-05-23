import { createBoard } from '@wixc3/react-board';
import { TicketDetail } from '../../../components/ticket-detail/ticket-detail';

export default createBoard({
    name: 'TicketDetail',
    Board: () => <TicketDetail />
});

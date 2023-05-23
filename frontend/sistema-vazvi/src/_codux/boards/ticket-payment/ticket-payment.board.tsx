import { createBoard } from '@wixc3/react-board';
import { TicketPayment } from '../../../components/ticket-payment/ticket-payment';

export default createBoard({
    name: 'TicketPayment',
    Board: () => <TicketPayment />
});

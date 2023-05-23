import { createBoard } from '@wixc3/react-board';
import { TicketPayment } from '../../../components/ticket-payment/ticket-payment';
import { Dispatch, SetStateAction } from 'react';

const ticketID: number = 0;

export default createBoard({
    name: 'TicketPayment',
    Board: () => <TicketPayment ticketID={ticketID} />
});

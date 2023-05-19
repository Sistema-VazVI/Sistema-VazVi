import { createBoard } from '@wixc3/react-board';
import { Ticket } from '../../../components/ticket/ticket';

export default createBoard({
    name: 'Ticket',
    Board: () => <Ticket />,
    environmentProps: {
        windowHeight: 503
    }
});

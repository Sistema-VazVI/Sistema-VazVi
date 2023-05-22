import { createBoard } from '@wixc3/react-board';
import { ClientCard } from '../../../components/client-card/client-card';

export default createBoard({
    name: 'ClientCard',
    Board: () => <ClientCard client={{
        debt: 1000,
        first_name: 'Ricardo Barba',
        id: 9,
        name: 'Ricardo Barba',
        phone: '123 123 1234'
    }} />,
    environmentProps: {
        canvasHeight: 162
    }
});

import { createBoard } from '@wixc3/react-board';
import { ClientCard } from '../../../components/client-card/client-card';

export default createBoard({
    name: 'ClientCard',
    Board: () => <ClientCard />,
    environmentProps: {
        canvasHeight: 162
    }
});

import { createBoard } from '@wixc3/react-board';
import { SaleCard } from '../../../components/sale-card/sale-card';

export default createBoard({
    name: 'SaleCard',
    Board: () => <SaleCard />
});

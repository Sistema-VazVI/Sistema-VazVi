import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../components/product-card/product-card';

export default createBoard({
    name: 'ProductCard',
    Board: () => <ProductCard />
});

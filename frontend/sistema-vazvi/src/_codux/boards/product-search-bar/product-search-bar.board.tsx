import { createBoard } from '@wixc3/react-board';
import { ProductSearchBar } from '../../../components/product-search-bar/product-search-bar';

export default createBoard({
    name: 'ProductSearchBar',
    Board: () => <ProductSearchBar />
});

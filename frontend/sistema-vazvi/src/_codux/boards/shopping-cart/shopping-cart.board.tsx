import { createBoard } from '@wixc3/react-board';
import { ShoppingCart } from '../../../components/shopping-cart/shopping-cart';

export default createBoard({
    name: 'ShoppingCart',
    Board: () => <ShoppingCart />,
    environmentProps: {
        windowHeight: 640
    }
});

import { createBoard } from '@wixc3/react-board';
import { ShoppingCart } from '../../../components/shopping-cart/shopping-cart';
import { Dispatch, SetStateAction } from 'react';
import IShoppingCart from '../../../models/shopping-cart.model';

const setShoppingCart: Dispatch<SetStateAction<IShoppingCart[]>> = {} as Dispatch<SetStateAction<IShoppingCart[]>>;
const shoppingCart: IShoppingCart[] = [];

export default createBoard({
    name: 'ShoppingCart',
    Board: () => <ShoppingCart setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />,
    environmentProps: {
        windowHeight: 640
    }
});

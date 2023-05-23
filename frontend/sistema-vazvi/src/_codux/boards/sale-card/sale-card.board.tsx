import { createBoard } from '@wixc3/react-board';
import { SaleCard } from '../../../components/sale-card/sale-card';
import IProduct from '../../../models/product.model';
import { Dispatch, SetStateAction } from 'react';
import IShoppingCart from '../../../models/shopping-cart.model';

const product: IProduct = {} as IProduct;
const setShoppingCart: Dispatch<SetStateAction<IShoppingCart[]>> = {} as Dispatch<SetStateAction<IShoppingCart[]>>;
const shoppingCart: IShoppingCart[] = []; 

export default createBoard({
    name: 'SaleCard',
    Board: () => <SaleCard product={product} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}/>
});

import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../components/product-card/product-card';
import IProduct from '../../../models/product.model';
import { Dispatch, SetStateAction } from 'react';

const product: IProduct = {} as IProduct;
const setProduct: Dispatch<SetStateAction<IProduct | undefined>> = {} as Dispatch<SetStateAction<IProduct | undefined>>;
const setIsOpen: Dispatch<SetStateAction<boolean>> = {} as Dispatch<SetStateAction<boolean>>;

export default createBoard({
    name: 'ProductCard',
    Board: () => <ProductCard setProduct={setProduct} product={product} setIsOpen={setIsOpen}/>,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});

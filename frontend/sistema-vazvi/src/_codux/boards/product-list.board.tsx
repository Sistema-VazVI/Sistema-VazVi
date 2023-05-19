import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../components/product-card/product-card';
import IProduct, { IProductCreate, IProductUpdate } from '../../models/product.model';
import { NewItem } from '../../components/new-item/new-item';

export default createBoard({
    name: 'ProductList',
    Board: () => <div className="containerCards">
        <NewItem />
    </div>,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 1111
    }
});

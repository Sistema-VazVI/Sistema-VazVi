import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../components/product-card/product-card';

export default createBoard({
    name: 'ProductCard',
    Board: () => <ProductCard product={{
        brand: {
            id: 0,
            is_active: 0,
            name: 'br'
        },
        category: {
            id: 0,
            is_active: 0,
            name: 'cat'
        },
        id: 0,
        is_active: 0,
        name: 'Nombre',
        price: 0,
        stock: 0
    }} />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});

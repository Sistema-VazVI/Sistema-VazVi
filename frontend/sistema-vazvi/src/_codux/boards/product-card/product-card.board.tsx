import { createBoard } from '@wixc3/react-board';
import { ProductCard } from '../../../components/product-card/product-card';

export default createBoard({
    name: 'ProductCard',
    Board: () => <ProductCard productProps={{
        product: {
            brand: {
                id: 1,
                is_active: 0,
                name: 'Linea 1'
            },
            category: {
                id: 1,
                is_active: 0,
                name: 'Categoria'
            },
            id: 0,
            is_active: 0,
            name: 'Producto',
            price: 100,
            stock: 50
        }
    }} />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768
    }
});

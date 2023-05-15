import { createBoard } from '@wixc3/react-board';
import { ProductSearchBar } from '../../../components/product-search-bar/product-search-bar';
import ICategory from '../../../models/category.model';
import IBrand from '../../../models/brand.model';

const categories: ICategory[] = [];
const brands: IBrand[] = [];

export default createBoard({
    name: 'ProductSearchBar',
    Board: () => <ProductSearchBar categories={categories} brands={brands} />
});

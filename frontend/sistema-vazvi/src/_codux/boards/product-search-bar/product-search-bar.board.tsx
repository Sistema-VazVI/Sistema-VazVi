import { createBoard } from '@wixc3/react-board';
import { ProductSearchBar } from '../../../components/product-search-bar/product-search-bar';
import ICategory from '../../../models/category.model';
import IBrand from '../../../models/brand.model';
import { Dispatch, SetStateAction, useState } from 'react';


const categories: ICategory[] = [];
const brands: IBrand[] = [];
const searchFilter:  Dispatch<SetStateAction<string | undefined>> = {} as Dispatch<SetStateAction<string | undefined>>;
const categoryFilter:  Dispatch<SetStateAction<number | undefined>> = {} as Dispatch<SetStateAction<number | undefined>>;
const brandFilter:  Dispatch<SetStateAction<number | undefined>> = {} as Dispatch<SetStateAction<number | undefined>>;


export default createBoard({
    name: 'ProductSearchBar',
    Board: () => <ProductSearchBar categories={categories} brands={brands} searchFilter={searchFilter} categoryFilter={categoryFilter} brandFilter={brandFilter} />
});

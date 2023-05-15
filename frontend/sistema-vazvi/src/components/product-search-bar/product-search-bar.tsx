import "./product-search-bar.css";
import React from "react";
import ICategory from '../../models/category.model';
import IBrand from "../../models/brand.model";

export interface ProductSearchBarProps {
    className?: string;
    categories: ICategory[];
    brands: IBrand[];
}

export const ProductSearchBar: React.FC<ProductSearchBarProps> = ({ className = "", categories, brands }) => (
    <div className={`${className} searchContainer`}>
        <label>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input placeholder="Buscar Producto" type='search' />
        </label>
        <select defaultValue="" className="searchSelect">
            <option hidden value="">Línea</option>
            {brands.map((brand: IBrand) => (
				<option value={brand.id}>{brand.name}</option>
			))}
        </select>
        <select defaultValue="" className="searchSelect">
            <option hidden value="">Categoría</option>
            {categories.map((category: ICategory) => (
				<option value={category.id}>{category.name}</option>
			))}
        </select>
    </div>
);

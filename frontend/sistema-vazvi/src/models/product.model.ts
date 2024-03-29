import IBrand from "./brand.model";
import ICategory from "./category.model";

export default interface IProduct {
 
    id: number;
    name: string;
    price: number;
    stock: number;
    category: ICategory;
    brand: IBrand;
    is_active: boolean;

}

export interface IProductCreate {
 
    name: string;
    price: number;
    stock: number;
    category: number;
    brand: number;
    is_active?: boolean;

}

export interface IProductUpdate {
    
    id: number;
    name?: string;
    price?: number;
    stock?: number;
    category?: number;
    brand?: number;
    is_active?: boolean;

}
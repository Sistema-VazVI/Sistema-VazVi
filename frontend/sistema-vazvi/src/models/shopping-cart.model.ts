import IProduct from "./product.model";

export default interface IShoppingCart{
 
    product: IProduct;
    quantity: number;
    
}
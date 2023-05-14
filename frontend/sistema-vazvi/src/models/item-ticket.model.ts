import IProduct from "./product.model";
import ITicket from "./ticket.model";


export default interface IitemTicket {
 
    id: number;
    ticket: ITicket;
    product: IProduct;
    quantity: number;
    
}

export interface IitemTicketCreate {
 
    ticket: number;
    product: number;
    quantity: number;

}

export interface IitemTicketUpdate {
    
    id: number;
    ticket?: number;
    product?: number;
    quantity?: number;

}
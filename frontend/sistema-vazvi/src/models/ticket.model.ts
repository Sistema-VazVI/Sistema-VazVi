import IClient from "./client.model";
import IitemTicket from "./item-ticket.model";
import IPayment from "./payment.model";

export default interface ITicket {
 
    id: number;
    total: number;
    payed: number;
    is_payed: boolean;
    client: IClient;
    items: IitemTicket[];
    payments: IPayment[];
    createdOn: string;
    
}

export interface ITicketCreate {
    
    id?: number;
    total: number;
    client: number;

}

export interface ITicketUpdate {
    
    id: number;
    total?: number;
    is_payed?: boolean;
    client?: number;

}
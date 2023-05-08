import IClient from "./client.model";

export default interface ITicket {
 
    id: number;
    total: number;
    is_payed: boolean;
    client: IClient;
    
}

export interface ITicketCreate {
 
    total: number;
    is_payed: boolean;
    client: number;

}

export interface ITicketUpdate {
    
    id: number;
    total?: number;
    is_payed?: boolean;
    client?: number;

}
import ITicket from "./ticket.model";

export default interface IClient {
 
    id: number;
    name: string;
    phone: string;
    debt: number;
    
}

export default interface IClientDetail {
 
    id: number;
    name: string;
    phone: string;
    debt: number;
    tickets: ITicket[];
    
}

export interface IClientCreate {
 
    name: string;
    phone: string;
    debt: number;

}

export interface IClientUpdate {
    
    id: number;
    name?: string;
    phone?: string;
    debt?: number;

}
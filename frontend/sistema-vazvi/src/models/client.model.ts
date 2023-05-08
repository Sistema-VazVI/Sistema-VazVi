export default interface IClient {
 
    id: number;
    name: string;
    first_name: string;
    phone: string;
    debt: number;
    
}

export interface IClientCreate {
 
    name: string;
    first_name: string;
    phone: string;
    debt: number;

}

export interface IClientUpdate {
    
    id: number;
    name?: string;
    first_name?: string;
    phone?: string;
    debt?: number;

}
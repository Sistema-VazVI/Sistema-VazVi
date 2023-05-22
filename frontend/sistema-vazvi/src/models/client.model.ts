export default interface IClient {
 
    id: number;
    name: string;
    phone: string;
    debt: number;
    
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
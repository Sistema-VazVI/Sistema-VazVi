export default interface IBrand{

    id: number;
    name: string;
    is_active: number;

}

export interface IBrandCreate{

    name: string;
    is_active: number;

}

export interface IBrandUpdate{

    id: number;
    name?: string;
    is_active?: boolean;

}
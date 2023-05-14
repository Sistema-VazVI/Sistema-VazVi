export default interface ICategory {

    id: number;
    name?: string;
    is_active?: boolean;

}

export interface ICategoryCreate {

    name?: string;
    is_active?: number;

}

export interface ICategoryUpdate {

    name?: string;
    is_active?: number;

}
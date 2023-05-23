export default interface ICategory {

    id: number;
    name?: string;
    is_active?: boolean;

}

export interface ICategoryCreate {

    name?: string;
    is_active?: boolean;

}

export interface ICategoryUpdate {

    id: number;
    name?: string;
    is_active?: boolean;

}
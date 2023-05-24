import ICategory, {ICategoryUpdate, ICategoryCreate} from "../models/category.model";
import axios from "axios";

export const getAll = async (): Promise<ICategory[]> => {
  return await axios
    .get<ICategory[]>(process.env.REACT_APP_API_URL+'category')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<ICategory> => {
  return await axios
    .get<ICategory>(process.env.REACT_APP_API_URL+`category/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const create = async (category:ICategoryCreate): Promise<ICategoryCreate> => {
  return await axios
    .post<ICategoryCreate>(process.env.REACT_APP_API_URL+'category', category)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const update = async (category:ICategoryUpdate): Promise<ICategoryUpdate> => {
  return await axios
    .patch<ICategoryUpdate>(process.env.REACT_APP_API_URL+'category', category)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const remove = async (category: ICategory): Promise<ICategory> => {
  return await axios
    .delete<ICategory>(process.env.REACT_APP_API_URL+`category/${category.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

import IBrand, {IBrandUpdate, IBrandCreate} from "../models/brand.model";
import axios from "axios";

export const getAll = async (): Promise<IBrand[]> => {
  return await axios
    .get<IBrand[]>('http://localhost:3001/brand')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<IBrand> => {
  return await axios
    .get<IBrand>(`http://localhost:3001/brand/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const create = async (brand:IBrandCreate): Promise<IBrandCreate> => {
  return await axios
    .post<IBrandCreate>('http://localhost:3001/brand', brand)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const update = async (brand:IBrandUpdate): Promise<IBrandUpdate> => {
  return await axios
    .patch<IBrandUpdate>('http://localhost:3001/brand', brand)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const remove = async (brand: IBrand): Promise<IBrand> => {
  return await axios
    .delete<IBrand>(`http://localhost:3001/brand/${brand.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

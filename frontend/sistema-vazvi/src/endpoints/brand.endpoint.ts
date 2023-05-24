import IBrand, {IBrandUpdate, IBrandCreate} from "../models/brand.model";
import axios from "axios";

export const getAll = async (): Promise<IBrand[]> => {
  return await axios
    .get<IBrand[]>(process.env.REACT_APP_API_URL+'/brand')
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
    .get<IBrand>(process.env.REACT_APP_API_URL+`/brand/${id}`)
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
    .post<IBrandCreate>(process.env.REACT_APP_API_URL+'/brand', brand)
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
    .patch<IBrandUpdate>(process.env.REACT_APP_API_URL+'/brand', brand)
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
    .delete<IBrand>(process.env.REACT_APP_API_URL+`/brand/${brand.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

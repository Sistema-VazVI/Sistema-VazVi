import IClient, {IClientUpdate, IClientCreate} from "../models/client.model";
import axios from "axios";
import IClientDetail from '../models/client.model';

export const getAll = async (searchFilter: string | undefined): Promise<IClient[]> => {
  let url: string = process.env.REACT_APP_API_URL+'/client';
  if (searchFilter !== undefined) {
    url += `?searchFilter=${searchFilter}`;
  }
  return await axios
    .get<IClient[]>(url)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<IClientDetail> => {
  return await axios
    .get<IClientDetail>(process.env.REACT_APP_API_URL+`/client/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const create = async (client:IClientCreate): Promise<IClientCreate> => {
  return await axios
    .post<IClientCreate>(process.env.REACT_APP_API_URL+'/client', client)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const update = async (client:IClientUpdate): Promise<IClientUpdate> => {
  return await axios
    .patch<IClientUpdate>(process.env.REACT_APP_API_URL+'/client', client)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const remove = async (client: IClient): Promise<IClient> => {
  return await axios
    .delete<IClient>(process.env.REACT_APP_API_URL+`/client/${client.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

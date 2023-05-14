import IClient, {IClientUpdate, IClientCreate} from "../models/client.model";
import axios from "axios";

export const getAll = async (): Promise<IClient[]> => {
  return await axios
    .get<IClient[]>('http://localhost:3001/client')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<IClient> => {
  return await axios
    .get<IClient>(`http://localhost:3001/client/${id}`)
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
    .post<IClientCreate>('http://localhost:3001/client', client)
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
    .patch<IClientUpdate>('http://localhost:3001/client', client)
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
    .delete<IClient>(`http://localhost:3001/client/${client.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

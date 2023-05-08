import IitemTicket, {IitemTicketUpdate, IitemTicketCreate} from "../models/item-ticket.model";
import axios from "axios";

export const getAll = async (): Promise<IitemTicket[]> => {
  return await axios
    .get<IitemTicket[]>('http://localhost:3001/item-ticket')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<IitemTicket> => {
  return await axios
    .get<IitemTicket>(`http://localhost:3001/item-ticket/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const create = async (itemTicket:IitemTicketCreate): Promise<IitemTicketCreate> => {
  return await axios
    .post<IitemTicketCreate>('http://localhost:3001/item-ticket', itemTicket)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const update = async (itemTicket:IitemTicketUpdate): Promise<IitemTicketUpdate> => {
  return await axios
    .patch<IitemTicketUpdate>('http://localhost:3001/item-ticket', itemTicket)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const remove = async (itemTicket: IitemTicket): Promise<IitemTicket> => {
  return await axios
    .delete<IitemTicket>(`http://localhost:3001/item-ticket/${itemTicket.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

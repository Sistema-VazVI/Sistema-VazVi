import ITicket, {ITicketUpdate, ITicketCreate} from "../models/ticket.model";
import axios from "axios";

export const getAll = async (): Promise<ITicket[]> => {
  return await axios
    .get<ITicket[]>(process.env.REACT_APP_API_URL+'ticket')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<ITicket> => {
  return await axios
    .get<ITicket>(process.env.REACT_APP_API_URL+`ticket/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const create = async (ticket:ITicketCreate): Promise<ITicketCreate> => {
  return await axios
    .post<ITicketCreate>(process.env.REACT_APP_API_URL+'ticket', ticket)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const update = async (ticket:ITicketUpdate): Promise<ITicketUpdate> => {
  return await axios
    .patch<ITicketUpdate>(process.env.REACT_APP_API_URL+'ticket', ticket)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const remove = async (ticket: ITicket): Promise<ITicket> => {
  return await axios
    .delete<ITicket>(process.env.REACT_APP_API_URL+`ticket/${ticket.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

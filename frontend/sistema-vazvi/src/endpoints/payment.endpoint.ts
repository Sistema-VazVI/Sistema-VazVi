import axios from "axios";
import { IPaymentCreate } from "../models/payment.model";

export const create = async (payment:IPaymentCreate): Promise<IPaymentCreate> => {
    return await axios
      .post<IPaymentCreate>(process.env.REACT_APP_API_URL+'/payment', payment)
      .then((response) => {
        if (response.data) {
          return response.data;
        }
      })
      .catch((error) => {
        return error;
      });
  };
import IProduct from "../models/product.model";
import axios from "axios";

export const getAllProducts = async (): Promise<IProduct[]> => {
  return await axios
    .get<IProduct[]>('http://localhost:3001/product')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

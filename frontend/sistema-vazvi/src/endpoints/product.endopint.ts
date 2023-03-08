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

export const getSingleProduct = async (id:number): Promise<IProduct> => {
  return await axios
    .get<IProduct>(`http://localhost:3001/product/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const createProduct = async (product:IProduct): Promise<IProduct> => {
  return await axios
    .post<IProduct>('http://localhost:3001/product', product)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const updateProduct = async (product:IProduct): Promise<IProduct> => {
  return await axios
    .patch<IProduct>('http://localhost:3001/product', product)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const deleteProduct = async (product: IProduct): Promise<IProduct> => {
  return await axios
    .delete<IProduct>(`http://localhost:3001/product/${product.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};
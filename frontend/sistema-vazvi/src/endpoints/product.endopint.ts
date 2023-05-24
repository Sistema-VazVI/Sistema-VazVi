import IProduct, {IProductUpdate, IProductCreate} from "../models/product.model";
import axios from "axios";

export const getAll = async (categoryId: number | undefined, brandId: number | undefined, searchFilter: string | undefined): Promise<IProduct[]> => {
  let url: string = process.env.REACT_APP_API_URL+'product';
  console.log(url);
  if (categoryId !== undefined) {
    url += `?categoryId=${categoryId}`;
  }
  if (brandId !== undefined) {
    url += `${categoryId !== undefined ? '&' : '?'}brandId=${brandId}`;
  }
  if (searchFilter !== undefined) {
    url += `${categoryId !== undefined || brandId !== undefined ? '&' : '?'}searchFilter=${searchFilter}`;
  }
  return await axios
    .get<IProduct[]>(url)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<IProduct> => {
  return await axios
    .get<IProduct>(process.env.REACT_APP_API_URL+`product/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const create = async (product:IProductCreate): Promise<IProductCreate> => {
  return new Promise<IProductCreate>((resolve, reject) => {
    axios
      .post<IProductCreate>(process.env.REACT_APP_API_URL + 'product', product)
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
 };

export const update = async (product:IProductUpdate): Promise<IProductUpdate> => {
  return new Promise<IProductUpdate>((resolve, reject) => {
    axios
      .post<IProductUpdate>(process.env.REACT_APP_API_URL + 'product', product)
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const remove = async (product: IProduct): Promise<IProduct> => {
  return await axios
    .delete<IProduct>(process.env.REACT_APP_API_URL+`product/${product.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

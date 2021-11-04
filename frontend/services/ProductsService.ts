import Api from "./Api";
import ApiAdmin from "./ApiAdmin";

export interface Product {
  name: String;
  description: String;
  quantity: Number;
  price: Number;
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
  endDate?: Date;
  images?: String;
}

export async function getProduct(produtId: string): Promise<any> {
  console.log(produtId);
  return Api()
    .get(`/products/${produtId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return Promise.reject(error);
    });
}

export async function getAllProducts(): Promise<any> {
  return Api()
    .get(`/products/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return Promise.reject(error);
    });
}

export async function findProducts(query: String): Promise<any> {
  return Api()
    .get(`/products/find/${query}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return Promise.reject(error);
    });
}

export async function addProduct(product: Product): Promise<any> {
  return ApiAdmin()
    .post("/products", product)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return Promise.reject(error);
    });
}

export async function deleteProduct(produtId: string): Promise<any> {
  return ApiAdmin()
    .delete(`/products/${produtId}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return Promise.reject(error);
    });
}

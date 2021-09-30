import Api from "./Api";
import ApiAdmin from "./ApiAdmin";

export interface Product {
  name: String;
  description: String;
  quantity: Number;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date;
  endDate: Date;
  price: Number;
}

export default async function getProduct(produtId: string): Promise<any> {
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

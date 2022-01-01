import { Many } from "lodash";
import Api from "./Api";
import ApiAdmin from "./ApiAdmin";

export interface Product {
  productId?: string;
  name: string;
  description: string;
  quantity: Number;
  price: Number;
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
  isPublished?: Boolean;
  endDate?: Date;
  images?: string;
  categories?: string[];
}

/*
 * Display of products on category pages
 */
export interface productsArray {
  _id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  images: string;
  createdAt: Date;
}

/*
 * For the filters on the category page
 */
export interface FilterOptions {
  element: "price" | "name" | "quantity";
  order: Many<boolean | "asc" | "desc">;
}

/**
 * @desc    Request a product with his ID
 * @param   String   Product ID || _id
 * @return  Information for the specific product ID
 * @error   Error message
 **/
export async function getProduct(produtId: string): Promise<any> {
  return Api()
    .get(`/products/${produtId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export async function getProductByID(id: string): Promise<any> {
  return Api()
    .get(`/products/id/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Get request to fetch all products
 * @return  Information for all products
 * @error   Error message
 **/
export async function getAllProducts(): Promise<any> {
  return Api()
    .get(`/products/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export async function getAllAvailableProducts(): Promise<any> {
  const query =
    "isPublished=true&select=_id,productId,name,price,quantity,images,createdAt";
  return Api()
    .get(`/products/find/${query}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export async function getCategoryProducts(categoryId: string): Promise<any> {
  const query = `isPublished=true&select=_id,productId,name,price,quantity,images,createdAt&elemMatch=categoryId=${categoryId}`;
  return Api()
    .get(`/products/find/${query}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @func    request [GET]
 * @desc    Find product with a specific query
 * @params  query : Query send to database
 * @return  Information for all products with that query
 * @error   Error message
 **/
export async function findProducts(query: String): Promise<any> {
  return Api()
    .get(`/products/find/${query}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Add a new product into the database
 * @param   Product Product Informations
 **/
export async function addProduct(product: Product): Promise<any> {
  return ApiAdmin()
    .post("/products", product)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Edit an existing product into the database
 * @param   product interface informations
 **/
export async function editProduct(product: Product): Promise<any> {
  return ApiAdmin()
    .put(`/products/${product.productId}`, product)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Api call to delete a product
 * @param   productId
 **/
export async function deleteProduct(produtId: string): Promise<any> {
  return ApiAdmin()
    .delete(`/products/${produtId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Send a request to publish or unplished a product
 * @param   ProductId
 * @return
 * @error
 **/
export async function publishedProduct(
  productId: string,
  publish: boolean
): Promise<any> {
  return ApiAdmin()
    .put(`/products/update/${productId}`, { isPublished: publish })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

import Api from "./Api";
import ApiAdmin from "./ApiAdmin";

export interface Category {
  categoryId?: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
  endDate?: Date;
  lastUser?: string;
  isPublished?: Boolean;
  images?: string;
  products?: Array<any>;
}

/**
 * @desc    GET all categories listed in db
 * @return  Array of categories according to the Category models
 * @error   Error message
 **/
export async function getAllCategories(): Promise<any> {
  return Api()
    .get(`/categories/`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export async function getSlimCategories(): Promise<any> {
  return Api()
    .get(`/categories/`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export async function getCategory(categoryId: String): Promise<any> {
  return Api()
    .get(`/category/${categoryId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

// POST
export async function addCategory(category: Category): Promise<any> {
  return ApiAdmin()
    .post("/categories", category)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

// DELETE
export async function deleteCategory(catId: string): Promise<any> {
  return ApiAdmin()
    .delete(`/categories/${catId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Edit an existing category into the database
 * @param   Category Category Informations
 * @return
 * @error
 **/
export async function editCategory(category: Category): Promise<any> {
  return ApiAdmin()
    .put(`/categories/${category.categoryId}`, category)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Send a request to publish or unplished a product
 * @param   CategoryId
 * @return
 * @error
 **/
export async function publishedProduct(
  categoryId: string,
  publish: boolean
): Promise<any> {
  return ApiAdmin()
    .put(`/categories/update/${categoryId}`, { isPublished: publish })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

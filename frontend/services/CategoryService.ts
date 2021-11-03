import Api from "./Api";
import ApiAdmin from "./ApiAdmin";

export interface Category {
  categoryId?: String;
  name: String;
  description: String;
  createdAt?: Date;
  updatedAt?: Date;
  startDate?: Date;
  endDate?: Date;
  lastUser?: String;
  images?: String;
}

// GET
export async function getCategories(): Promise<any> {
  return Api()
    .get(`/categories/`)
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

export async function getCategory(categoryId: String): Promise<any> {
  return Api()
    .get(`/category/${categoryId}`)
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



// POST
export async function addCategory(category: Category): Promise<any> {
  return ApiAdmin()
    .post("/categories", category)
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

// DELETE
export async function deleteCategory(catId: string): Promise<any> {
  return ApiAdmin()
    .delete(`/categories/${catId}`)
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

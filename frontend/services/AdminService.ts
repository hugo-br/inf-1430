import ApiAdmin from "./ApiAdmin";

export interface Admin {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
}

/**
 * @desc    Send request to create a new administrator
 * @params  Admin object
 **/
export async function registerAdmin(credentials: Admin): Promise<any> {
  return ApiAdmin()
    .post("/register", credentials)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Send request to create a new administrator
 * @params  Admin object
 **/
export async function getAllAdmin(): Promise<any> {
  return ApiAdmin()
    .get("/admins")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Send request to get informations about one specific administrator
 * @params  AdminId
 **/
export async function getOneAdmin(adminId: string): Promise<any> {
  return ApiAdmin()
    .get(`/${adminId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * @desc    Api call to delete an administrator
 * @param   adminId
 **/
export async function deleteAdmin(adminId: string): Promise<any> {
  return ApiAdmin()
    .delete(`/${adminId}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

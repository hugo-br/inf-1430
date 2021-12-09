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
 * @params  Admin object
 * @desc    Send request to create a new administrator
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

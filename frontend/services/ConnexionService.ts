import Api from "../services/Api";
import ApiAdmin from "../services/ApiAdmin";
import LocalStorageService from "../services/LocalStoreService";

/**
 * @func    Connexion
 * @params
 * @desc    Allows to create a connexion with the server
 **/
export async function registerUser(props: any) {
  const credentials = {
    email: "test@lol.com",
    password: "eloajksjdhd",
    passwordConfirmation: "eloajksjdhd",
    name: "test1",
  };
  Api()
    .post("users", credentials)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error.code === "409") {
        // this.accountAlreadyCreated();
      }
      console.log(error.response.data);
      console.log(error.response.status);
      // console.log(error.response.headers);
    });
}

/**
 * @func    [POST]
 * @params  Credentials - email and password as string
 * @desc    Sent credentials for login
 * @return  Tokens for session
 * @error   Promise reject
 **/
export async function loginAdmin(credentials: {}): Promise<any> {
  return ApiAdmin()
    .post("/sessions", credentials)
    .then((response) => {
      if (response.data.confirm) {
        // set access tokens
        LocalStorageService.clearToken();
        LocalStorageService.setToken({
          access_token: String(response.data.accessToken),
          refresh_token: String(response.data.refreshToken),
        });
      }
      return Promise.resolve(response.data);
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
}

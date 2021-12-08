import Api from "./Api";

/**
 * @func    request [POST]
 * @desc    Send a request to create a new user
 * @return  Success or error message
 **/
export default {
  register(credentials: object): Promise<any> {
    return Api().post("register", credentials);
  },
};

import Api from "./Api";

export default {
  // enregistrement
  register(credentials: object): Promise<any> {
    return Api().post("register", credentials);
  },
};

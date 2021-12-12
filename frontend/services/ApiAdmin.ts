import axios from "axios";
import LocalStorageService from "../services/LocalStoreService";

export interface ApiResult {
  confirm?: boolean;
  admin?: {};
}

/**
 * @func    request [API]
 * @desc    Create a private connexion with the api server
 **/
export default () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${LocalStorageService.getAccessToken()}`,
    "x-refresh": LocalStorageService.getRefreshToken(),
  };

  return axios.create({
    headers: headers,
    baseURL: `http://localhost:3001/api/admin`,
  });
};

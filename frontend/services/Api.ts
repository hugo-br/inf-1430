import axios from "axios";

/**
 * @func    request [API]
 * @desc    Create a public connexion with the api server
 **/
export default () => {
  return axios.create({
    baseURL: `http://localhost:3001/api`,
  });
};

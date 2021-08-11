import axios from 'axios';
import AuthentificationService from './AuthentificationService';

export default () => {
    return axios.create({
        baseURL: "http://localhost:8000/"
    });
}

AuthentificationService.register({
    email: "test@gmail.com",
    password: "1234"
});
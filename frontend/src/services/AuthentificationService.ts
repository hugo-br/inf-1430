import Api from "@/services/Api";

export default {

    // enregistrement
    register(credentials: object) : Promise<any> {
       return Api().post('register', credentials);
    }

}
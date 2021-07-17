import {create} from "apisauce";

const apiClient = create({
    //MUST USE GENERAL
    baseURL: 'http://10.0.2.2:3000'
})

export default apiClient;

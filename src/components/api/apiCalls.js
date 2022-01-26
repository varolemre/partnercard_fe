import axios from "axios";

export const login = creds  => {
    return axios.post('/api/v1/login', {}, {auth:creds, withCredentials:true});
};

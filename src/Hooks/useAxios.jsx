import axios from "axios";

const instance = axios.create({
    // using proxy server of the given api because of CORS issue
    baseURL: 'https://quad-b-task-server.vercel.app/api',
    withCredentials: true

});

const useAxios = () => {
    return instance
};

export default useAxios;
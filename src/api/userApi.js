import axiosClient from "./axiosClient";

const userApi = {
    register(data){
        const url = 'api/v1/auth/register';
        return axiosClient.post(url,data);   
    },
    login(data){
        const url = 'api/v1/auth/login';
        return axiosClient.post(url,data);   
    },
    info(){
        const url ="api/v1/users/me";
        return axiosClient.get(url);
    },
    update(data){
        const url="/api/v1/users/update-infomation"
        return axiosClient.put(url,data);
    },


};

export default userApi;
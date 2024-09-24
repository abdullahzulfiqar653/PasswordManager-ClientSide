import axios from "axios";

const axiosInstance = axios.create({

    baseURL: "https://pmdev.azsoft.dev/pm/api" ,
})



function getTokenIncludedConfig() {
    return {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    };
  }
  

  class APIClient {
    endpoint;
    constructor(endpoint) {
      this.endpoint = endpoint;
    }

    post = (data = {}) => {
      return axiosInstance
        .post(this.endpoint, data)
        .then((res) => res.data)
        .catch((error)=>{throw error});
    };
    postConfig = (data = {}, config = getTokenIncludedConfig()) => {
      return axiosInstance
        .post(this.endpoint, data, config)
        .then((res) => res.data)
        .catch((error)=>{throw error});
    };
    get = (config = getTokenIncludedConfig()) => {
      return axiosInstance
        .get(this.endpoint, config)
        .then((res) => res.data)
        .catch((error)=>{throw error});
    };

    patch = (data, body, config = getTokenIncludedConfig()) => {
      return axiosInstance
        .patch(`${this.endpoint}/${data?.id}/`, body, config)
        .then((res) => ({
          data: res.data,
          status: res.status,
        }))
        .catch((error)=>{throw error});
    };

    createToken = (pass_phrase) => {
      return this.post({ pass_phrase });
    };

    getSeeds = () => {
      return this.post();
    };

    create = (data) => {
      return this.postConfig(JSON.stringify(data));
    };

    verifyToken = (token, login) => {
      return this.postConfig({ token })
        .then(() => login())
    };

    getUserPasswords = () => {
      return this.get();
    };

    updatePassword = (data) => {
      const body = JSON.stringify(data);
      return this.patch(data,body);
    };
  }
  
export default APIClient;
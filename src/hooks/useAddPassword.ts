import { useMutation } from "@tanstack/react-query";
import apiClient, { getTokenIncludedConfig } from "../services/api-client";

const useAddPassword = () => useMutation({
    mutationFn:(addData) => {
    const jsonPayload = JSON.stringify(addData);
      return apiClient
        .post('/passwords/', jsonPayload, getTokenIncludedConfig())
        .then((res) => res.data)
        .catch((error) => {
          console.error("API error:", error.response ? error.response.data : error.message);
          throw error;
        });
    },
    onSuccess: (res) => {
      console.log("Mutation successful:", res);
    },
    onError: (error) => {
      console.error('Error occurred:', error);
    }
  });


export default useAddPassword;
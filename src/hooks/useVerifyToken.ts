import { useMutation } from "@tanstack/react-query";
import apiClient, { getTokenIncludedConfig } from "../services/api-client";

const useVerifyToken = (login) => useMutation({
    mutationFn:(token) => {
      return apiClient
        .post('/user/token/verify/', { token }, getTokenIncludedConfig())
        .then(() => {
            console.log('sucessfull request');
            login();
          })
        .catch(er => er.error)
  },
});

export default useVerifyToken;
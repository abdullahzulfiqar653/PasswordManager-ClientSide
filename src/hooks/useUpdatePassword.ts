import { useMutation } from "@tanstack/react-query";
import apiClient, { getTokenIncludedConfig } from "../services/api-client";

const useUpdatePassword = () =>
  useMutation({
    mutationFn: (data) => {
      const body = JSON.stringify(data);
      return apiClient
        .patch(`/passwords/${data?.id}/`, body, getTokenIncludedConfig())
        .then((res) => {
          // Ensure we're returning both data and status
          return {
            data: res.data,
            status: res.status, // Attach status to response object
          };
        })
        .catch((error) => {
          console.error(
            "API error:",
            error.response ? error.response.data : error.message
          );
          throw error;
        });
    },
  });

export default useUpdatePassword;

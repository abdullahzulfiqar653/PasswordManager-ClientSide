import { useQuery } from "@tanstack/react-query";
import apiClient, { getTokenIncludedConfig } from "../services/api-client";

const useGetPassword = ()=> useQuery({
    queryKey:["getPassword"],
    queryFn: () => apiClient  
    .get('/passwords/', getTokenIncludedConfig())
    .then(res=> res.data)
    .catch(er => er.error)
 
})


export default useGetPassword;
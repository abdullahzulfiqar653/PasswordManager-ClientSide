import { useQuery } from "@tanstack/react-query";
import apiClient, { getTokenIncludedConfig } from "../services/api-client";

const useGetUserPasswords = ()=> useQuery({
    queryKey:["getPassword"],
    queryFn: () => apiClient  
    .get('/passwords/', getTokenIncludedConfig())
    .then(res=> res.data)
    .catch(er => er.error),
    refetchOnWindowFocus: true, // Refetches data when the window regains focus
    refetchOnMount: true,       // Refetches data whenever the component remounts
    refetchOnReconnect: true,   // Refetches data if the connection is re-established
    staleTime: 0,
})


export default useGetUserPasswords;
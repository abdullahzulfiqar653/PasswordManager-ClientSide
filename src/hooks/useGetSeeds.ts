import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";


export interface RegisterPassword{
    pass_phrase :string;
}

const useGetSeeds = ()=> useQuery({
    queryKey:["password"],
    queryFn: () => apiClient  
    .post<RegisterPassword>('/user/generate-pass-phrase/')
    .then(res=> res.data)
    .catch(er => er.error)

})

export default useGetSeeds;


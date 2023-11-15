import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useRoomsData = () => {

    const axiosLocal = useAxiosSecure()
    const {data:rooms, isLoading, refetch } = useQuery({
        queryKey: ["rooms"], 
        queryFn: async () => {
            const res = await axiosLocal.get('/rooms')
            return await res.data; 
        }
    })
    
    return {rooms, isLoading, refetch }
};

export default useRoomsData;
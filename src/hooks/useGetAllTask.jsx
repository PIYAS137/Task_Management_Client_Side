import { useQuery } from '@tanstack/react-query'
import useAxiosHook from './useAxiosHook'
import { useContext } from 'react';
import { AuthContext } from '../Context/FirebaseContext';



const useGetAllTask = () => {

    const myHook = useAxiosHook();
    const {user,loader} = useContext(AuthContext)



  const {data:allTask,refetch} = useQuery({
    queryKey:['getalltask'],
    enabled : !loader,
    queryFn: async()=>{
        const res = await myHook.get(`/task?email=${user?.email}`);
        return res.data
    }
  })

return [allTask,refetch]
}

export default useGetAllTask
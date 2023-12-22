import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'https://task-management-backend-beta.vercel.app'
})

const useAxiosHook = () => {
  
    return myAxios;
    
}

export default useAxiosHook
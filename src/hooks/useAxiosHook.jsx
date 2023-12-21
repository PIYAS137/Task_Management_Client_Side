import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'http://localhost:5022'
})

const useAxiosHook = () => {
  
    return myAxios
    
}

export default useAxiosHook
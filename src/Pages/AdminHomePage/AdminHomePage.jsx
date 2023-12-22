import { useContext } from "react";
import TaskDetails from "../../Components/TaskDetails"
import useGetAllTask from "../../hooks/useGetAllTask"
import { AuthContext } from "../../Context/FirebaseContext";


const AdminHomePage = () => {

    const {user}=useContext(AuthContext)
    const [allTask,refetch]=useGetAllTask();


    return (
        <div>
            <div className="bg-black text-white">
                <div className=" container mx-auto grid grid-cols-2 items-center py-5">
                    <div>
                        <p className=" font-semibold text-base">My total task : {allTask?.length}</p>
                        <p className=" font-semibold text-base">My To Do Task : {allTask?.filter(one=>one.status== "todo")?.length}</p>
                        <p className=" font-semibold text-base">Ongoing Task : {allTask?.filter(one=>one.status=="ongo")?.length}</p>
                        <p className=" font-semibold text-base">Completed Task : {allTask?.filter(one=>one.status=="comp")?.length}</p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h1><strong>{user?.displayName}</strong></h1>
                        <h1><strong>{user?.email}</strong></h1>
                    </div>
                </div>
            </div>
            <TaskDetails />
        </div>

    )
}

export default AdminHomePage
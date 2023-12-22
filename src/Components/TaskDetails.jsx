import useGetAllTask from "../hooks/useGetAllTask"
import CompletedSlice from "./CompletedSlice"
import CreateTask from "./CreateTask"
import OngoingSlice from "./OngoingSlice"
import TodoSlice from "./TodoSlice"


const TaskDetails = () => {

    const [allTask,refetch]=useGetAllTask();

    return (
        <div className=" container mx-auto">
            <CreateTask />
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <TodoSlice refetch={refetch} allTask={allTask}/>
                <OngoingSlice refetch={refetch} allTask={allTask}/>
                <CompletedSlice refetch={refetch} allTask={allTask}/>
            </div>
        </div>
    )
}

export default TaskDetails 
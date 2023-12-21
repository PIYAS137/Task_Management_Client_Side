import CreateTask from "./CreateTask"


const TaskDetails = () => {
    return (
        <div className=" container mx-auto">
            <CreateTask />
            <div className=" grid grid-cols-3 bg-red-200 mt-5">
                <div className=" bg-blue-300 text-white w-full h-full p-4">
                    <h1 className=" text-center font-bold text-lg">To Do Task</h1>
                </div>
                <div className=" bg-purple-400 text-white p-5">
                    <h1 className=" text-center font-bold text-lg">Ongoing Task</h1>
                </div>
                <div className=" bg-green-800 text-whited p-5">
                    <h1 className=" text-center font-bold text-lg">Completed Task</h1>
                </div>
            </div>
        </div>
    )
}

export default TaskDetails
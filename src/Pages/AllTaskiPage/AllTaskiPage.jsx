import OneCard from "../../Components/OneCard"
import useGetAllTask from "../../hooks/useGetAllTask"


const AllTaskiPage = () => {

    const [allTask, refetch] = useGetAllTask()

    return (
        <div>
            <h1 className=" text-center font-black mb-5 text-xl">MY ALL TASK</h1>
            {
                    allTask?.length == 0 && <div className=" container mx-auto"><p className="bg-red-200 mt-2 p-1 text-red-500 rounded-lg text-center">No Task</p></div>
                }
            <div className="container mx-auto p-3 rounded-lg grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {
                    allTask?.map(one => <OneCard key={one._id} data={one} refetch={refetch} />)
                }
            </div>
        </div>
    )
}

export default AllTaskiPage
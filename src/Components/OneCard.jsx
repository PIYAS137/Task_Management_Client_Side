import useAxiosHook from "../hooks/useAxiosHook"

const OneCard = ({ data, refetch }) => {

    const myHook = useAxiosHook()

    const handleAddTodo = (sid) => {
        const n = {
            id: sid,
            status: 'todo'
        }
        myHook.patch('/task', n)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }
    const handleAddOngoin = (sid) => {
        const n = {
            id: sid,
            status: 'ongo'
        }
        myHook.patch('/task', n)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }
    const handleAddCompleted = (sid) => {
        const n = {
            id: sid,
            status: 'comp'
        }
        myHook.patch('/task', n)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }






    return (
        <div className=" text-black bg-blue-300 mt-2 p-3 rounded-lg flex justify-between items-center">
            <div>

                <h1 className=" font-bold text-sm">{data?.title}</h1>
                <h1 className=" text-xs">{data?.description}</h1>
                <small>{data?.deadline}</small>
            </div>
            <div className="flex items-center flex-col justify-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-none ">...</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleAddTodo(data?._id)}><a>Add to Todo</a></li>
                        <li onClick={() => handleAddOngoin(data?._id)}><a>Add to Ongoing</a></li>
                        <li onClick={() => handleAddCompleted(data?._id)}><a>Add to Completed</a></li>
                    </ul>
                </div>
                <div>
                    {data?.priority == 'max' && <div className="badge badge-accent">{data?.priority}</div>}
                    {data?.priority == 'less' && <div className="badge badge-ghost text-black">{data?.priority}</div>}
                    {data?.priority == 'medium' && <div className="badge badge-primary">{data?.priority}</div>}
                </div>
            </div>
        </div>
    )
}

export default OneCard
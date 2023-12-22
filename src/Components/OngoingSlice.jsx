import { useEffect, useState } from "react";
import OneCard from "./OneCard";

const OngoingSlice = ({ allTask, refetch }) => {


    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const temp = allTask?.filter(one => one.status === "ongo");
        setDatas(temp)
    }, [allTask])



    return (
        <div className=" bg-slate-200 rounded-lg shadow-xl text-white w-full h-full p-3">
            <h1 className=" text-center font-bold text-lg py-2 rounded-t-lg bg-red-400">Ongoing Task</h1>
            <div>
                {
                    datas?.length == 0 && <p className="bg-red-200 mt-2 p-1 text-red-500 rounded-lg text-center">No Task</p>
                }
                {
                    datas?.map(one => <OneCard refetch={refetch} key={one._id} data={one} />)
                }
            </div>
        </div>
    )
}

export default OngoingSlice
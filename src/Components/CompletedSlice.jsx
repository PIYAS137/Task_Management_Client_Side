import { useEffect, useState } from "react";
import OneCard from "./OneCard"


const CompletedSlice = ({allTask,refetch}) => {


    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const temp = allTask?.filter(one => one.status === "comp");
        setDatas(temp)
    }, [allTask])


    return (
        <div className=" bg-slate-200 rounded-lg shadow-xl text-white w-full h-full p-3">
            <h1 className=" text-center font-bold text-lg py-2 rounded-t-lg text-black bg-green-400">Completed Task</h1>
            <div>
                {
                    datas?.map(one=><OneCard refetch={refetch} key={one._id} data={one}/>)
                }
            </div>
        </div>
    )
}

export default CompletedSlice
import { useEffect, useState } from "react"
import useAxiosHook from "../hooks/useAxiosHook"


const ReleventPeople = () => {

    const myHook = useAxiosHook()
    const [data, setData] = useState({})

    useEffect(() => {
        myHook.get('/stat')
            .then(res => {
                setData(res.data)
            })
    }, [])


    return (
        <div className=" mt-16 mb-16 max-w-5xl mx-auto">
            <h1 className=" font-black text-center mt-8 text-3xl">People Who Use</h1>
            <h1 className=" font-semibold text-center mb-10 mt-2 text-sm">Types of people who use this website for their task management</h1>
            <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card card-compact bg-base-100 shadow-xl h-[500px]">
                    <figure className=" w-full h-full"><img className=" w-full h-full object-cover
                    " src="https://i.pinimg.com/564x/00/51/9a/00519ae0e89f8b1252d33ab1eeb337fc.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Developer : {data?.webDev?.length}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl h-[500px]">
                    <figure><img src="https://i.pinimg.com/564x/17/4a/01/174a0108303919e4bb2c49f9043e7def.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher : {data?.teacher?.length}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl h-[500px]">
                    <figure className=" w-full h-full"><img className="w-full h-full object-cover" src="https://i.pinimg.com/564x/e6/39/2e/e6392eb7ab92b788735fbd2a908093ab.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Student : {data?.student?.length}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReleventPeople
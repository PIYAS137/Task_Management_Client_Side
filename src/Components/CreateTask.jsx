import { useContext, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { useForm } from "react-hook-form"
import useAxiosHook from "../hooks/useAxiosHook";
import { AuthContext } from "../Context/FirebaseContext";
import Swal from 'sweetalert2'
import useGetAllTask from "../hooks/useGetAllTask";

const CreateTask = () => {
    const { user } = useContext(AuthContext)
    const [modalStatus, setModalStatus] = useState(false);
    const myAxios = useAxiosHook()

    const [,refetch] = useGetAllTask()

    const {
        reset,
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        setModalStatus(false)
        const newUser = {
            title: data.title,
            deadline: data.dead,
            description: data.des,
            priority: data.prio,
            email: user?.email,
            name: user?.displayName,
            status: 'todo'
        }
        myAxios.post('/task', newUser)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Task Added !",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    reset()
                    refetch()
                }
            }).catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: err.message,
                    showConfirmButton: false,
                    timer: 2000
                });
            })
    }


    return (
        <>
            <div onClick={() => setModalStatus(true)} className=" flex justify-center shadow-lg cursor-pointer bg-slate-200 mt-5 mx-auto max-w-[200px] p-2 rounded-lg font-bold space-x-2 items-center">
                <HiOutlinePlus className=" text-xl" />
                <h1>Create New Task</h1>
            </div>
            {
                modalStatus &&
                <div className="w-full h-screen absolute top-0 left-0 bg-[#000000ba] flex justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl bg-purple-200 rounded-xl -mt-16">
                        <div>
                            <h1 className=" text-3xl text-center font-bold ">New Task</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input {...register("title")} type="text" placeholder="title" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register("des")} className="textarea textarea-bordered" placeholder="description" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add Deadline</span>
                            </label>
                            <input {...register("dead")} type="date" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <select {...register("prio")} className="select select-bordered w-full">
                                <option value=" ">Add Prority Level</option>
                                <option value="max">Max</option>
                                <option value="medium">Medium</option>
                                <option value="less">Less</option>
                            </select>
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default CreateTask
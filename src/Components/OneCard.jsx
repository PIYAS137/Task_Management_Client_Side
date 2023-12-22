import Swal from "sweetalert2"
import useAxiosHook from "../hooks/useAxiosHook"
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/FirebaseContext";

const OneCard = ({ data, refetch }) => {

    const {user} = useContext(AuthContext)
    const [modalStatus, setModalStatus] = useState(false);
    const myHook = useAxiosHook()
    const [itemId,setItemId]=useState(data._id)
    const {
        reset,
        setValue,
        register,
        handleSubmit,
    } = useForm()

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
    const handleDeleteTask = (sid) => {
        console.log(sid);
        myHook.delete(`/task/${sid}`)
        .then(res=>{
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Deleted !",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        setValue('title',data?.title || '');
        setValue('des',data?.description || '');
        setValue('dead',data?.deadline || '')
        setValue('prio',data?.priority || '')
      },[data,setValue])


    const onSubmit = (data) => {
        setModalStatus(false)
        const newUser = {
            title: data.title,
            deadline: data.dead,
            description: data.des,
            priority: data.prio,
        }
        myHook.put(`/task/${itemId}`, newUser)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Edited !",
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
                        <li onClick={() => setModalStatus(true)}><a>Edit Task</a></li>
                        <li onClick={() => handleDeleteTask(data?._id)}><a>Delete Task</a></li>
                    </ul>
                </div>
                <div>
                    {data?.priority == 'max' && <div className="badge badge-accent">{data?.priority}</div>}
                    {data?.priority == 'less' && <div className="badge badge-ghost text-black">{data?.priority}</div>}
                    {data?.priority == 'medium' && <div className="badge badge-primary">{data?.priority}</div>}
                </div>
            </div>
            {
                modalStatus &&
                <div className="w-full z-50 h-screen absolute top-0 left-0 bg-[#000000ba] flex justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body relative max-w-xl bg-purple-200 rounded-xl -mt-16">
                    <button onClick={()=>setModalStatus(false)} className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
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
        </div>
    )
}

export default OneCard
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const CreateTask = () => {
    const [modalStatus, setModalStatus] = useState(false);

    const {
        register,
        handleSubmit,
    } = useForm()


    const onSubmit = (data) => {
        setModalStatus(false)
        const newUser = {
            name: data.name,
            email: data.email,
            profession: data.profession
        }
    }


    return (
        <>
            <div onClick={() => setModalStatus(true)} className=" flex justify-center shadow-lg cursor-pointer bg-slate-200 mt-5 mx-auto max-w-[200px] p-2 rounded-lg font-bold space-x-2 items-center">
                <HiOutlinePlus className=" text-xl" />
                <h1>Create New Task</h1>
            </div>
            {
                modalStatus &&
                <div className="w-full h-screen absolute top-0 left-0 bg-black flex justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl bg-red-200 rounded-xl -mt-16">
                        <div>
                            <h1 className=" text-3xl text-center font-bold ">New Task</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Profession</span>
                            </label>
                            <select {...register("profession")} className="select select-bordered w-full">
                                <option value=" ">Who shot first?</option>
                                <option value="web developer">Web Developer</option>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have an account ? <Link
                                    to={'/login'} className="font-bold">Lets Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default CreateTask
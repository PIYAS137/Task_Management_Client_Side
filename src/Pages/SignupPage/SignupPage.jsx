import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../Context/FirebaseContext"
import Swal from 'sweetalert2'
import useAxiosHook from "../../hooks/useAxiosHook"


const SignupPage = () => {

  const { FirebaseSignupUser, FirebaseUpdateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const myAxios = useAxiosHook();

  const {
    register,
    handleSubmit,
  } = useForm()


  const onSubmit = (data) => {

    const newUser = {
      name: data.name,
      email: data.email,
      profession: data.profession,
      photo: data.photo,
    }
    FirebaseSignupUser(data.email, data.password)
      .then(res => {
        if (res.user) {
          FirebaseUpdateUser(res.user, data.name, data.photo)
            .then(res => {

              myAxios.post('/user', newUser)
                .then(res => {
                  if (res.data.insertedId) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Signup Successfull !",
                      showConfirmButton: false,
                      timer: 2000
                    });
                    navigate(location?.state ? location?.state : '/')
                  }
                }).catch(err => {
                  Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something Went Wrong",
                    showConfirmButton: false,
                    timer: 2000
                  });
                })
            })
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
    <div className=" w-full h-screen justify-center items-center flex">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl bg-red-200 rounded-xl -mt-16">
        <div>
          <h1 className=" text-3xl text-center font-bold ">Sign Up User</h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input {...register("photo")} type="text" placeholder="photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
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
            <p>Already have an account ? <Link to={'/login'} className="font-bold">Lets Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default SignupPage
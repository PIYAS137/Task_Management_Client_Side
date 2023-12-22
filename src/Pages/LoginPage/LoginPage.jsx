import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseContext"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useAxiosHook from '../../hooks/useAxiosHook'


const LoginPage = () => {

  const { FirebaseLoginUser,FirebaseGogleLogin,FirebaseGithubLogin } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const myHook = useAxiosHook()
  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {

    FirebaseLoginUser(data.email, data.pass)
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull !",
          showConfirmButton: false,
          timer: 2000
        });
        navigate(location?.state ? location?.state : '/')
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

  const handleGoogleLogin=()=>{
    FirebaseGogleLogin()
    .then(res => {
      const newUser = {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
        profession:'student',
      }
      myHook.post('/user', newUser)
        .then(res => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfull !",
            showConfirmButton: false,
            timer: 2000
          });
          navigate(location?.state ? location?.state : '/')
        })
    }).catch()
  }
  const handleGithubLogin=()=>{
    FirebaseGithubLogin()
    .then(res => {
      const newUser = {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
        profession:'student',
      }
      myHook.post('/user', newUser)
        .then(res => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfull !",
            showConfirmButton: false,
            timer: 2000
          });
          navigate(location?.state ? location?.state : '/')
        })
    }).catch()
  }


  return (
    <div className=" w-full h-screen justify-center items-center flex">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-xl bg-red-200 rounded-xl -mt-16">
        <div>
          <h1 className=" text-3xl text-center font-bold ">Login User</h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input{...register("email")} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input{...register("pass")} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p>Dont have an account ? <Link state={location?.state} to={'/signup'} className="font-bold">Create account!</Link></p>
          </label>
        </div>

        <div className="form-control">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control">
          <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
          <button onClick={handleGithubLogin} className="btn mt-2 btn-primary">Login With GitHub</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
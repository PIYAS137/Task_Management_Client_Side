import { Link } from "react-router-dom"


const LoginPage = () => {
  return (
    <div className=" w-full h-screen justify-center items-center flex">
      <form className="card-body max-w-xl bg-red-200 rounded-xl -mt-16">
        <div>
          <h1 className=" text-3xl text-center font-bold ">Login User</h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p>Dont have an account ? <Link to={'/signup'} className="font-bold">Create account!</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
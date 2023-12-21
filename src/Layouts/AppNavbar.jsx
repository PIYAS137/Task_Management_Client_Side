import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Context/FirebaseContext"


const AppNavbar = () => {

    const {user,FirebaseLogoutUser} =  useContext(AuthContext)

    console.log(user);

    const navLinks = <>
        <li><NavLink to={'/'}>Homepage</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>

const handleClickLogOut=()=>{
    FirebaseLogoutUser()
    .then().catch()
}



    return (
        <>
            <div className="navbar bg-red-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Task.M</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? 
                        <button onClick={handleClickLogOut} className="btn btn-error text-white">Logout</button>
                        :
                        <button className="btn btn-primary text-white"><Link to={'/login'}>Login</Link></button>
                    }
                </div>
            </div>
        </>
    )
}

export default AppNavbar
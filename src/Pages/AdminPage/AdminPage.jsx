import { NavLink, Outlet } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";
import { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseContext";

const AdminPage = () => {

    const {FirebaseLogoutUser} = useContext(AuthContext)

    const handleClickLogOut=()=>{
        FirebaseLogoutUser()
        .then().catch();
    }



    return (
        <div>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className=" m-5 flex justify-between cursor-pointer drawer-button text-3xl">
                        <HiBars3 />
                        <p className=" text-2xl font-bold text-purple-500">User Dashboard</p>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
                        {/* Sidebar content here */}
                        <li className="font-semibold">User Admin Routes</li>
                        <li className=" cursor-pointer hover:bg-purple-400 bg-purple-500 text-white rounded-lg"><NavLink to={'/'}>Home Page</NavLink></li>
                        <li className=" cursor-pointer hover:bg-purple-400 bg-purple-500 text-white rounded-lg"><NavLink to={'/dashboard'}>User Dashboard</NavLink></li>
                        <li className=" cursor-pointer hover:bg-purple-400 bg-purple-500 text-white rounded-lg"><NavLink to={'alltask'}>View All Task</NavLink></li>
                        <li onClick={handleClickLogOut} className="cursor-pointer hover:bg-red-400 bg-red-500 text-white py-2 rounded-lg px-4">Logout</li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default AdminPage
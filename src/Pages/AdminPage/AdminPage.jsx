import { NavLink, Outlet } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";

const AdminPage = () => {
    return (
        <div>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className=" m-5 flex justify-between cursor-pointer drawer-button text-3xl">
                        <HiBars3 />
                        <p>User Dashboard</p>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
                        {/* Sidebar content here */}
                        <li className="font-semibold">User Admin Routes</li>
                        <li><NavLink>Add TodO</NavLink></li>
                        <li><NavLink>Add TodO</NavLink></li>
                        <li><NavLink>Add TodO</NavLink></li>
                        <li><NavLink>Add TodO</NavLink></li>
                        <li><NavLink>Add TodO</NavLink></li>
                        <li><NavLink>Add TodO</NavLink></li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default AdminPage
import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"
import Footer from "../../Components/Footer"


const RootPage = () => {
    return (
        <div className=" container mx-auto px-3 md:px-0">
            <AppNavbar />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default RootPage
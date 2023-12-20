import TaskDetails from "../../Components/TaskDetails"


const AdminHomePage = () => {
    return (
        <div>
            <div className="bg-red-100">
                <div className=" container mx-auto grid grid-cols-2 items-center py-5">
                    <div>
                        <p className=" font-semibold text-lg">Total Task : 10</p>
                        <p className=" font-semibold text-lg">To Do Task : 10</p>
                        <p className=" font-semibold text-lg">Ongoing Task : 10</p>
                        <p className=" font-semibold text-lg">Completed Task : 10</p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/F60MHS9/IMG-20220219-WA0053.jpg" />
                            </div>
                        </div>
                        <h1>User Name : </h1>
                        <h1>User Profession : </h1>
                    </div>
                </div>
            </div>
            <TaskDetails />
        </div>

    )
}

export default AdminHomePage
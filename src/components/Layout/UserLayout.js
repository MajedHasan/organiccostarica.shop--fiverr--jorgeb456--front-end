import { Link, Outlet } from "react-router-dom"
import { IoLogOutOutline } from "react-icons/io5"

const UserLayout = () => {
    return (
        <div className="min-h-screen w-full bg-[#F0F3EE] py-5 px-3 flex justify-center items-center">
            <div className="flex min-h-2xl max-w-4xl w-full bg-white p-5 rounded-lg shadow-lg gap-5">
                <div className="max-w-[180px] p-5 rounded w-full bg-slate-300 flex flex-col gap-5 justify-center">
                    <img src={require("../../assets/img/demo-profile-pic.jpg")} alt="Profile Pic" className="max-w-[100px] w-full rounded-full mx-auto" />
                    <h4 className="text-lg font-bold text-center">Mehedi Hasan</h4>
                    <div className="flex flex-col gap-2 my-5">
                        <Link to="/profile" className="w-full bg-black py-2 px-5 rounded text-white text-center font-medium">Profile</Link>
                        <Link to="/profile/orders" className="w-full bg-black py-2 px-5 rounded text-white text-center font-medium">Orders</Link>
                        <Link to="/profile/settings" className="w-full bg-black py-2 px-5 rounded text-white text-center font-medium">Settings</Link>
                    </div>
                    <button className="py-2 px-5 w-full flex items-center gap-3 bg-red-500 text-white">
                        <IoLogOutOutline />
                        <span className="font-semibold text-md">Logout</span>
                    </button>
                </div>
                <div className="flex-1 bg-slate-50 rounded overflow-x-scroll max-h-[435px] overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserLayout
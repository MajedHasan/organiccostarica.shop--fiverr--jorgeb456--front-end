import { Link } from "react-router-dom"
import NormalLayout from "../components/Layout/NormalLayout"

const Login = () => {
    return (
        <NormalLayout>
            <div className="w-full bg-[#F0F3EE] py-28 px-3">
                <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3 flex justify-center items-center flex-col gap-6">
                    <h2 className="text-3xl font-semibold">Login</h2>
                    <form action="" className="p-8 shadow rounded-xl max-w-sm w-full bg-slate-100 flex flex-col gap-5">
                        {/* <p className="text-md text-red-500 font-medium text-center">Error</p> */}
                        <input type="text" placeholder="username" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="password" placeholder="password" className="w-full py-3 px-4 rounded outline-none" />
                        <button className="underline text-gray-600 text-sm">Forget Password</button>
                        <input type="button" className="w-full py-3 px-4 rounded outline-none cursor-pointer bg-black text-white uppercase font-bold" value="Login" />
                        <Link to="/signup" className="text-center">Need an account? <span className="underline">Signup here</span></Link>
                    </form>
                </div>
            </div>
        </NormalLayout>
    )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'
import NormalLayout from '../components/Layout/NormalLayout'

const Signup = () => {
    return (
        <NormalLayout>
            <div className="w-full bg-[#F0F3EE] py-28 px-3">
                <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3 flex justify-center items-center flex-col gap-6">
                    <h2 className="text-3xl font-semibold">Signup</h2>
                    <form action="" className="p-8 shadow rounded-xl max-w-sm w-full bg-slate-100 flex flex-col gap-5">
                        {/* <p className="text-md text-red-500 font-medium text-center">Error</p> */}
                        <input type="text" placeholder="Name" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="text" placeholder="Username" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="number" placeholder="Phone" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="email" placeholder="Email" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="password" placeholder="Password" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="password" placeholder="Confirm Password" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="text" placeholder="Location" className="w-full py-3 px-4 rounded outline-none" />
                        <input type="button" className="w-full py-3 px-4 rounded outline-none cursor-pointer bg-black text-white uppercase font-bold" value="Signup" />
                        <Link to="/login" className="text-center">Have an account? <span className="underline">Login here</span></Link>
                    </form>
                </div>
            </div>
        </NormalLayout>
    )
}

export default Signup
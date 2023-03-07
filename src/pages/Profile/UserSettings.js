import React from 'react'

const UserSettings = () => {
    return (
        <div className='p-5 flex flex-col gap-6'>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <input type="text" placeholder='Name' className='w-full py-2 px-5 rounded text-sm border-[1px] border-slate-400 outline-none' />
                <input type="text" placeholder='Username' className='w-full py-2 px-5 rounded text-sm border-[1px] border-slate-400 outline-none' />
            </div>
            <div className='flex flex-col gap-5'>
                <input type="number" placeholder='Phone' className='w-full py-2 px-5 rounded text-sm border-[1px] border-slate-400 outline-none' />
                <input type="email" placeholder='Email' className='w-full py-2 px-5 rounded text-sm border-[1px] border-slate-400 outline-none' />
                <input type="password" placeholder='Password' className='w-full py-2 px-5 rounded text-sm border-[1px] border-slate-400 outline-none' />
                <input type="password" placeholder='Confirm Password' className='w-full py-2 px-5 rounded text-sm border-[1px] border-slate-400 outline-none' />
                <input type="text" placeholder='Location' className='w-full py-2 px-5 rounded text-sm border-[1px] border-slate-400 outline-none' />
                <button className='w-full bg-black text-white py-2 px-6 rounded text-lg font-semibold uppercase'>Save</button>
            </div>
        </div>
    )
}

export default UserSettings
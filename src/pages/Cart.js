import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FiTrash2 } from "react-icons/fi"
import { Link } from 'react-router-dom'
import NormalLayout from '../components/Layout/NormalLayout'

const Cart = () => {
    return (
        <NormalLayout>
            <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3">
                <div className="my-14">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="md:text-2xl text-xl font-semibold">Your cart</h2>
                        <Link to="/shop" className='underline'>Continue shopping</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Img</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>
                                        <img src={require("../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[50px]' />
                                    </td>
                                    <td>
                                        <h4 className="text-md font-semibold">American Lettuce</h4>
                                    </td>
                                    <td>
                                        <span className="text-xs">$100</span>
                                    </td>
                                    <td>
                                        <div className='border-[1px] border-gray-400 py-1 px-3 flex items-center gap-2 w-fit'>
                                            <AiOutlineMinus className='cursor-pointer' />
                                            <input type="text" className='w-fit max-w-[30px] outline-none border-none text-center' readOnly value={2} />
                                            <AiOutlinePlus className='cursor-pointer' />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-sm font-semibold">$200</span>
                                    </td>
                                    <td>
                                        <FiTrash2 className='text-xl text-red-500 font-semibold cursor-pointer' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td>
                                        <img src={require("../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[50px]' />
                                    </td>
                                    <td>
                                        <h4 className="text-md font-semibold">American Lettuce</h4>
                                    </td>
                                    <td>
                                        <span className="text-xs">$100</span>
                                    </td>
                                    <td>
                                        <div className='border-[1px] border-gray-400 py-1 px-3 flex items-center gap-2 w-fit'>
                                            <AiOutlineMinus className='cursor-pointer' />
                                            <input type="text" className='w-fit max-w-[30px] outline-none border-none text-center' readOnly value={2} />
                                            <AiOutlinePlus className='cursor-pointer' />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-sm font-semibold">$200</span>
                                    </td>
                                    <td>
                                        <FiTrash2 className='text-xl text-red-500 font-semibold cursor-pointer' />
                                    </td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td>
                                        <img src={require("../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[50px]' />
                                    </td>
                                    <td>
                                        <h4 className="text-md font-semibold">American Lettuce</h4>
                                    </td>
                                    <td>
                                        <span className="text-xs">$100</span>
                                    </td>
                                    <td>
                                        <div className='border-[1px] border-gray-400 py-1 px-3 flex items-center gap-2 w-fit'>
                                            <AiOutlineMinus className='cursor-pointer' />
                                            <input type="text" className='w-fit max-w-[30px] outline-none border-none text-center' readOnly value={2} />
                                            <AiOutlinePlus className='cursor-pointer' />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-sm font-semibold">$200</span>
                                    </td>
                                    <td>
                                        <FiTrash2 className='text-xl text-red-500 font-semibold cursor-pointer' />
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="flex items-end flex-col mt-4">
                        <h2 className="md:text-lg text-md font-medium text-slate-600"><span className='font-semibold text-xl text-slate-900'>Subtotal</span> ₡ 550,00 CRC</h2>
                        <p className='text-xs mt-4 mb-6'>Tax included. <Link to="/" className='underline'>Shipping</Link> calculated at checkout.</p>
                        <Link to="/checkout" className='py-2 px-16 rounded bg-black text-white font-semibold uppercase text-xl'>Checkout</Link>
                    </div>
                </div>
            </div>
        </NormalLayout>
    )
}

export default Cart
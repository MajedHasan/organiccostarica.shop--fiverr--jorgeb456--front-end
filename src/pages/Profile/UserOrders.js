import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'

const UserOrders = () => {
    return (
        <div className=''>
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
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span> */}
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span>
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span> */}
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span> */}
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span> */}
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span> */}
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span> */}
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span> */}
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span>
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span> */}
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span> */}
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span> */}
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
                            </td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>
                                <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" className='max-w-[35px]' />
                            </td>
                            <td>
                                <h4 className="text-sm font-semibold">American Lettuce</h4>
                            </td>
                            <td>
                                <span className="text-xs">$100</span>
                            </td>
                            <td>
                                <span className='font-bold text-md'>2</span>
                            </td>
                            <td>
                                <span className="text-sm font-semibold">$200</span>
                            </td>
                            <td>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-yellow-300 text-yellow-600'>In Progress</span> */}
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-sky-300 text-sky-600'>Shiped</span> */}
                                <span className='py-1 px-3 rounded font-semibold text-xs bg-teal-300 text-teal-600'>Delivered</span>
                                {/* <span className='py-1 px-3 rounded font-semibold text-xs bg-green-300 text-green-600'>Completed</span> */}
                            </td>
                            <td>
                                <FiMoreVertical className='text-xl text-red-500 font-semibold cursor-pointer' />
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
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default UserOrders
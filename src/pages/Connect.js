import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsEnvelope } from 'react-icons/bs'
import { BiRightArrowAlt } from "react-icons/bi"
import NormalLayout from '../components/Layout/NormalLayout'
import { FaFacebookSquare } from 'react-icons/fa'

const Connect = () => {
    return (
        <NormalLayout>
            <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3 my-14">
                <div className='max-w-2xl mx-auto'>
                    <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>Connect us</h2>
                    <p className='mt-5 mb-3 max-w-xs'>WHEN do you follow for more information Contact us for your request</p>
                    <h3 className='mt-10 mb-2 md:text-2xl text-xl font-medium'>We’d love to hear from you!</h3>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mb-4'>
                        <input type="text" placeholder='Name' className='border-2 border-slate-300 py-2 px-3' />
                        <input type="text" placeholder='Email' className='border-2 border-slate-300 py-2 px-3' />
                    </div>
                    <div className='grid grid-cols-1 gap-5 mb-4'>
                        <input type="text" placeholder='Phone Number' className='border-2 border-slate-300 py-2 px-3' />
                    </div>
                    <div className='grid grid-cols-1 gap-5 mb-4'>
                        <textarea name="" id="" className='border-2 border-slate-300 py-2 px-3 h-28' placeholder='Comment'></textarea>
                    </div>
                    <div className='grid grid-cols-1 gap-5 mb-4'>
                        <button className='bg-black text-white py-2 px-8'>SEND</button>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 my-12 items-center'>
                    <div>
                        <h3 className='text-2xl font-medium mb-2'>Contact</h3>
                        <div className='py-10 px-6 bg-[#f8f8f8] mb-8'>
                            <h3 className="text-xl font-medium">COSTA RICA ORGÁNICA</h3>
                            <p className='text-sm mt-4'>
                                1 km al NE del cruce de la Cantera
                                <br />
                                11908 San Ignacio de Cajón
                            </p>
                        </div>
                        <div className='py-6 px-5 bg-[#f8f8f8] mb-3'>
                            <h3 className="text-xl font-medium mb-4">🖤</h3>
                            <p className='flex gap-2 items-center'>
                                <BsEnvelope />
                                <a href="" className='underline'>info@organiccostarica.shop</a>
                            </p>
                            <p className='flex gap-2 items-center'>
                                <AiOutlineWhatsApp />
                                <a href="" className='underline'>(+506) 8466 8080</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Looking for some more....</h3>
                        <div className='flex flex-col gap-3 mt-12 items-center'>
                            <AiOutlineInstagram className='w-16 h-16 bg-black text-white rounded-xl p-3' />
                            <a href="https://www.instagram.com/organic_costarica/" className='flex items-center gap-2 bg-black py-1 px-6 rounded-lg text-white'>
                                <span>INSTAGRAM </span>
                                <BiRightArrowAlt className='text-xl' />
                            </a>
                        </div>
                        <div className='flex flex-col gap-3 mt-12 items-center'>
                            <img src={require("../assets/img/ModifiableSpaceIconActive.png")} alt="" className='w-12 h-auto' />
                            <a href="" className='flex items-center gap-2 bg-black py-1 px-6 rounded-lg text-white'>
                                <span>Disfruta, comparte y sigue</span>
                            </a>
                        </div>
                        <div className='flex flex-col gap-3 mt-12 items-center'>
                            <FaFacebookSquare className='w-16 h-16 bg-black text-white rounded-xl p-3' />
                            <a href="https://m.facebook.com/Organic-Costa-Rica-104930048787828/" className='flex items-center gap-2 bg-black py-1 px-6 rounded-lg text-white'>
                                <span>FACEBOOK  </span>
                                <BiRightArrowAlt className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </NormalLayout>
    )
}

export default Connect
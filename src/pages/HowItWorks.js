import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NormalLayout from '../components/Layout/NormalLayout'

const HowItWorks = () => {
    return (
        <NormalLayout>
            <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3">
                <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>HOW does the delivery service work</h2>
                        <p className='md:text-md text-sm mt-6'>Only a few steps to enjoy the pleasure for a healthy liefestyle in Costa Rica</p>
                        <p className='md:text-md text-sm mt-6'>We are your <strong>delivery service</strong> of high quality vegetables, leafy greens and herbs.</p>
                        <p className='md:text-md text-sm'>You can find locally grown in our <strong>Online Market</strong> to organize your need for a week.</p>
                    </div>
                    <div className='md:ml-auto mx-auto'>
                        <img src={require("../assets/img/HowItWorksSectionImg.webp")} alt="" />
                    </div>
                </section>
                <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-8 items-center'>
                    <div className='md:ml-auto mx-auto'>
                        <img src={require("../assets/img/HowItWorksSection02Img.webp")} alt="" />
                    </div>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>Customize your order</h2>
                        <p className='md:text-md text-sm mt-6'>based on your preferences and needs.
                            <strong>Add your delivery location</strong> directly with every product.</p>
                        <Link to="/shop" className='mt-5 flex items-center gap-3 text-lg bg-black text-white py-2 px-8 w-fit'>
                            <FaChevronRight />
                            <span>Example product</span>
                        </Link>
                    </div>
                </section>
                <section className='my-14 flex flex-col items-center justify-center gap-8 bg-[#F0F3EE] py-16 px-3'>
                    <div className='text-center'>
                        <h2 className='md:text-2xl text-md font-semibold'>PÉREZ ZELEDÓN [stock]</h2>
                        <p className='md:text-sm text-xs'>FIND YOUR DELIVERY LOCATION AND - DAY FOR</p>
                    </div>
                    <div>
                        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                MONDAY - PÉREZ ZELEDÓN
                            </div>
                            <div className="collapse-content">
                                <p>11901* San Isidro del General
                                    <br />
                                    11902* generales
                                    <br />
                                    11903* Daniel Flores</p>
                            </div>
                        </div>
                        <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                TUESDAY - PÉREZ ZELEDÓN/PUNTARENAS
                            </div>
                            <div className="collapse-content">
                                <p>11909* Platanillo
                                    <br />
                                    11909* Barú
                                    <br />
                                    60104* Uvita</p>
                            </div>
                        </div>
                        <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                THURSDAY - GARABITO
                            </div>
                            <div className="collapse-content">
                                <p>61101* Jacó</p>
                            </div>
                        </div>
                        <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                FRIDAY - AGUIRRE
                            </div>
                            <div className="collapse-content">
                                <p>60601* Quepos</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>Delivery for free</h2>
                        <p className='md:text-md text-sm mt-6'>Your order should be done by <strong>24 hours before your delivery day.</strong></p>
                        <p className='md:text-md text-sm mt-6'>The delicious goods are delivered to your home on the upcoming delivery day based on your address.
                            Delivery to your door is included with a <strong>minimum order</strong> of 10.000 <strong>₡.</strong></p>
                        <p className='md:text-md text-sm'>You can find locally grown in our <strong>Online Market</strong> to organize your need for a week.</p>
                        <h4 className="mt-4 md:text-xl text-md font-semibold">Nourish yourself</h4>
                        <p className='md:text-md text-sm'>Once you have got your greens:
                            <br />
                            Enjoy cooking with all the fresh and great seasonal ingredients. Your body will enjoy the pleasure of
                            <br />
                            fresh organic food and your family will acknowledge it.
                        </p>
                    </div>
                    <div className='md:ml-auto mx-auto'>
                        <img src={require("../assets/img/HowItWorksSection04Img.webp")} alt="" />
                    </div>
                </section>
            </div>
        </NormalLayout>
    )
}

export default HowItWorks
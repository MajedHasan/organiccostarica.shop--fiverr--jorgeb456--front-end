import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div style={{ background: `url("${require("../../assets/img/HomePageBanner.png")}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className='max-w-[1140px] w-full mx-auto px-3 md:px-0 pt-40 pb-80'>
                <h1 className='max-w-[400px] w-full md:text-7xl text-3xl text-white font-bold'>FRESH FROM OUR FIELDS</h1>
                <p className='text-md text-white font-medium my-8 max-w-[300px] w-full'>Choose maximum organic flavor - we bring it right to your door</p>
                <Link to="/shop" className="bg-[#4B841F] text-white py-3 px-12 rounded-full hover:bg-[#3c6a19]">GET YOUR GREENS</Link>
            </div>
        </div>
    )
}

export default Banner
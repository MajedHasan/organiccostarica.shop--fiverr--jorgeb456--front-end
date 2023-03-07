import NormalLayout from '../components/Layout/NormalLayout'


const WhyChooseUs = () => {
    return (
        <NormalLayout>
            <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3">
                <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>WHY could this become your favorite farmers market</h2>
                        <p className='md:text-md text-sm mt-6'>Many reasons for taking use of our extra service -
                            at the end the good taste will convince you.</p>
                        <h4 className="md:text-2xl text-xl font-medium mt-5">CONCENTRATE ON THE ESSENTIALS</h4>
                        <p className='md:text-sm text-sm'>
                            We do not try to change nature.
                            <br />
                            We concentrate on the essentials for growth to get the best and <strong>most tasty outcome</strong> for your lunch.
                        </p>
                    </div>
                    <div className='md:ml-auto mx-auto'>
                        <img src={require("../assets/img/WhyChooseUsSection01Img.webp")} alt="" />
                    </div>
                </section>
                <div className='py-12 px-12 rounded-xl shadow-lg bg-[#F0F3EE]'>
                    <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-8 items-center'>
                        <div className='md:ml-auto mx-auto'>
                            <img src={require("../assets/img/WhyChooseUsSection02Img.webp")} alt="" className='rounded-full w-full h-full' />
                        </div>
                        <div>
                            <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>THE STORY OF YOUR FOOD</h2>
                            <p className='md:text-md text-sm mt-6'>
                                Current organic standard is no guarantee for quality, methods and working conditions you expect. The best way to certify the quality of your food is to know your farmer. Think beyond organic.
                                <br />
                                If you know the story behind your food and the <strong>passion of our farmers</strong> - your ingredients become more valuable.
                                <br />
                                <strong>We believe in great and healthy ways of farming.</strong>
                            </p>
                        </div>
                    </section>
                    <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-8 items-center'>
                        <div>
                            <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>GREAT EFFECT FOR YOUR HEALTH</h2>
                            <p className='md:text-md text-sm mt-6'>
                                We guarantee <strong>richness in vitamins</strong>, thanks to a short supply chain without intermediaries. Such a comfortable and easy way to increase your intake.
                                <br />
                                Your vegetables are firsthand foods - delivered <strong>fresh from our farm</strong> to your plate.
                            </p>
                        </div>
                        <div className='md:ml-auto mx-auto'>
                            <img src={require("../assets/img/WhyChooseUsSection03Img.webp")} alt="" className='rounded-full w-full h-full object-cover' />
                        </div>
                    </section>
                </div>
                <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>EASY TO INTEGRATE SELF-CARE INTO YOUR DAILY LIFE</h2>
                        <p className='md:text-md text-sm mt-6'>The seasons best mix of 100% organic farm products - for your comfort we bring it to your door.</p>
                    </div>
                    <div className='md:ml-auto mx-auto'>
                        <img src={require("../assets/img/WhyChooseUsSection04Img.webp")} alt="" />
                    </div>
                </section>
                <section className='my-14 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div className='md:ml-auto mx-auto'>
                        <img src={require("../assets/img/WhyChooseUsSection05Img.webp")} alt="" />
                    </div>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-[#484848]'>PURE TASTE</h2>
                        <p className='md:text-md text-sm mt-6'>
                            If you could get the <strong>best out of your basic ingredients:</strong>
                            <br />
                            Why would you choose something different?
                        </p>
                    </div>
                </section>
            </div>
        </NormalLayout>
    )
}

export default WhyChooseUs
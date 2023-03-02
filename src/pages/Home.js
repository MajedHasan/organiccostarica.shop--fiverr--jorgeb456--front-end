import React, { useState } from 'react'
import Banner from '../components/home/Banner'
import Boxes from '../components/home/Boxes'
import ModifiableSpace from '../components/home/ModifiableSpace'
import Testimonial from '../components/home/Testimonial'
import NormalLayout from '../components/Layout/NormalLayout'

const Home = () => {

    const [boxType, setBoxType] = useState("Basic Box")
    const [box, setBox] = useState(null)
    const [vegitable, setVegitable] = useState(null)

    return (
        <>
            <NormalLayout topbarShown={true}>
                <Banner />
                <ModifiableSpace boxType={boxType} setBoxType={setBoxType} />
                <Boxes boxType={boxType} setBox={setBox} vegitable={vegitable} setVegitable={setVegitable} />
                <Testimonial />
            </NormalLayout>
        </>
    )
}

export default Home
import { useState } from "react"
import Boxes from "../components/home/Boxes"
import NormalLayout from "../components/Layout/NormalLayout"
import styles from "../components/shop/Shop.module.css"


const Shop = () => {

    const [boxType, setBoxType] = useState("Basic Box")
    const [box, setBox] = useState(null)
    const [vegitable, setVegitable] = useState(null)

    return (
        <NormalLayout>
            <div className={styles.boxesFilterContainer}>
                <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3">
                    <div>
                        <h4 className="md:text-md text-sm">Showing 20 Results</h4>
                    </div>
                    <div>
                        <label htmlFor="boxType" className="text-sm mr-3">Select Box Type :</label>
                        <select name="boxType" id="boxType" className="py-1 px-4 rounded-lg text-xs">
                            <option value="">Basic Box</option>
                            <option value="">Weight Loss</option>
                            <option value="">Gain Muscle</option>
                            <option value="">Gain Energy</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.boxesContainer}>
                <Boxes boxType={boxType} box={box} vegitable={vegitable} setVegitable={setVegitable} isShopPage={true}></Boxes>
            </div>
        </NormalLayout>
    )
}

export default Shop
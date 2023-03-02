import ModifiableBoxImg from "../../assets/img/ModifiableSpaceImg.png"
import ModifiableSpaceIcon from "../../assets/img/ModifiableSpaceIcon.png"
import ModifiableSpaceIconActive from "../../assets/img/ModifiableSpaceIconActive.png"
import styles from "./ModifiableSpace.module.css"


const ModifiableSpace = ({ boxType, setBoxType }) => {

    return (
        <>
            <div className='my-10'>
                <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3">
                    <div className='mb-10 text-center'>
                        <h2 className='font-bold md:text-5xl text-2xl'>Box modifiable space</h2>
                        <p className='md:text-2xl text-xl max-w-[400px] w-full mx-auto'>Modifiable spaces to be able to add an infinite amount of boxes</p>
                    </div>
                    <div className="flex justify-between items-center gap-32 md:flex-row flex-col">
                        <div className={styles.modifiableSpaceIconBoxWrapper}>
                            <div onClick={() => setBoxType("Examples")}>
                                <img src={boxType === "Examples" ? ModifiableSpaceIconActive : ModifiableSpaceIcon} alt="" /> <span>Examples</span>
                            </div>
                            <div onClick={() => setBoxType("Basic Box")}>
                                <img src={boxType === "Basic Box" ? ModifiableSpaceIconActive : ModifiableSpaceIcon} alt="" /> <span>Basic Box</span>
                            </div>
                            <div onClick={() => setBoxType("Volumn Increase Box")}>
                                <img src={boxType === "Volumn Increase Box" ? ModifiableSpaceIconActive : ModifiableSpaceIcon} alt="" /> <span>Volume Increase Box</span>
                            </div>
                            <div onClick={() => setBoxType("Lost Box Weight")}>
                                <img src={boxType === "Lost Box Weight" ? ModifiableSpaceIconActive : ModifiableSpaceIcon} alt="" /> <span>Lost Box Weight</span>
                            </div>
                            <div onClick={() => setBoxType("Box To Increase Your Energy")}>
                                <img src={boxType === "Box To Increase Your Energy" ? ModifiableSpaceIconActive : ModifiableSpaceIcon} alt="" /> <span>Box To Increase Your Energy</span>
                            </div>
                            <div onClick={() => setBoxType("Build Your Box")}>
                                <img src={boxType === "Build Your Box" ? ModifiableSpaceIconActive : ModifiableSpaceIcon} alt="" /> <span>Build Your Box</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img src={ModifiableBoxImg} alt="" className={styles.modifiableBoxImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModifiableSpace
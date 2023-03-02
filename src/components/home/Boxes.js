import ModifiableSpaceIcon from "../../assets/img/ModifiableSpaceIconActive.png"
import styles from "./Boxes.module.css"


const Boxes = ({ boxType, setBox, vegitable, setVegitable }) => {
    return (
        <>
            <div className="bg-[#F0F3EE] py-16">
                <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3">
                    <img src={ModifiableSpaceIcon} alt="" className="mx-auto" />
                    <h2 className="md:text-4xl text-2xl font-bold text-center mb-5">Display of the boxes {boxType}</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-12">
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Basic-Box.png")} alt="" />
                            <h3>Basic Box</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Basic Box")}>Add to cart</label>
                        </div>
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Weight-loss.png")} alt="" />
                            <h3>Weight Loss</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Weight Loss")}>Add to cart</label>
                        </div>
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Gain-Muscle.png")} alt="" />
                            <h3>Gain Muscle</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Gain Muscle")}>Add to cart</label>
                        </div>
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Gain-Enargy.png")} alt="" />
                            <h3>Gain Energy</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Gain Energy")}>Add to cart</label>
                        </div>
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Build-your-box.png")} alt="" />
                            <h3>Basic Box</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Basic Box")}>Add to cart</label>
                        </div>
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Gain-Enargy.png")} alt="" />
                            <h3>Gain Energy</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Gain Energy")}>Add to cart</label>
                        </div>
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Basic-Box.png")} alt="" />
                            <h3>Basic Box</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Basic Box")}>Add to cart</label>
                        </div>
                        <div className={styles.box}>
                            <img src={require("../../assets/img/Weight-loss.png")} alt="" />
                            <h3>Weight Loss</h3>
                            <p>Only <span>$75</span></p>
                            <label htmlFor="boxModal" onClick={() => setBox("Weight Loss")}>Add to cart</label>
                        </div>
                    </div>
                    <button className="mx-auto py-2 px-10 rounded-full text-white bg-[#4B841F] capitalize block">Load more</button>
                </div>
            </div>
            <input type="checkbox" id="boxModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="boxModal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#4B841F] border-[#4B841F]" onClick={() => {
                        setBox(null)
                        setVegitable(null)
                    }}>✕</label>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                        {
                            vegitable === null ? <div className={styles.modalBox}>
                                <img src={require("../../assets/img/Basic-Box.png")} alt="" />
                                <h3>Basic Box</h3>
                                <p>Only <span>$75</span></p>
                                <button htmlFor="boxModal" onClick={() => setBox("Basic Box")}>Add to cart</button>
                            </div> : <div className={styles.vegitableDetailBox}>
                                <div className="bg-[#4B841F] text-center text-white py-2 px-4 font-semibold">
                                    <h3 className="text-2xl uppercase">Benefit the Broccoli</h3>
                                </div>
                                <div className="bg-[#F1F3EE] py-4 px-5">
                                    <img src={require("../../assets/img/Vegitables/VegitableDetail/VegitableDetail.png")} alt="" className="w-full" />
                                </div>
                                <div className="grid grid-cols-2 gap-2 border-[#F1F3EE] border-2 items-center">
                                    <img src={require("../../assets/img/Vegitables/VegitableDetail/VegitableDetail2.png")} alt="" className="w-full" />
                                    <div className="text-center">
                                        <h4 className="text-md font-bold capitalize text-[#4B841F]">maximus</h4>
                                        <h4 className="text-md font-semibold leading-4">Class apte taciti ad.</h4>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className='col-span-3'>
                            <div className={styles.boxHeading}>
                                <h2 className={vegitable === null && styles.activeHeading}><span>Step 2:</span> Box XX tasks to perform</h2>
                                <h2 className={vegitable !== null && styles.activeHeading}><span>Step 3:</span> Interaction with the products</h2>
                            </div>
                            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 mt-3">
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Carrot.png")} alt="" onClick={() => setVegitable("")} />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Carrot</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Potato.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Potato</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Lettuce.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Lettuce</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Broccoli.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Broccoli</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Celery.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Celery</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Tomato.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Tomato</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Cucumber.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Cucumber</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Onion.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Onion</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Spinach.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Spinach</h5>
                                </div>
                                <div className={styles.vegitableBox}>
                                    <img src={require("../../assets/img/Vegitables/Leek.png")} alt="" />
                                    <p>Category: <span>Natural</span></p>
                                    <h5>Leek</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boxes
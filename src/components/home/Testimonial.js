import ModifiableSpaceIcon from "../../assets/img/ModifiableSpaceIconActive.png"
import styles from "./Testimonial.module.css"


const Testimonial = () => {
    return (
        <div className="py-16">
            <div className="max-w-[1140px] w-full mx-auto xl:px-0 px-3">
                <img src={ModifiableSpaceIcon} alt="" className="mx-auto" />
                <h2 className="md:text-4xl text-2xl font-bold text-center mb-5">WHAT PEOPLE ARE SAYING</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    <div className={styles.box}>
                        <div>
                            <img src={require("../../assets/img/testimonial.jpeg")} alt="" />
                            <img src={require("../../assets/img/Quotation.png")} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor ornare nisl at. Ut ultricies nunc eget massa viverra euismod. Curabitur nulla mauris, imperdiet id quam ut, accumsan ornare mi. Suspendisse vel odio sed elit suscipit ac id lectus.</p>
                        <h4>John Deo</h4>
                        <span>CEO at Costa Rica</span>
                    </div>
                    <div className={styles.box}>
                        <div>
                            <img src={require("../../assets/img/testimonial2.jpeg")} alt="" />
                            <img src={require("../../assets/img/Quotation.png")} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor ornare nisl at. Ut ultricies nunc eget massa viverra euismod. Curabitur nulla mauris, imperdiet id quam ut, accumsan ornare mi. Suspendisse vel odio sed elit suscipit ac id lectus.</p>
                        <h4>Charlotte</h4>
                        <span>CEO at Costa Rica</span>
                    </div>
                    <div className={styles.box}>
                        <div>
                            <img src={require("../../assets/img/testimonial3.jpeg")} alt="" />
                            <img src={require("../../assets/img/Quotation.png")} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor ornare nisl at. Ut ultricies nunc eget massa viverra euismod. Curabitur nulla mauris, imperdiet id quam ut, accumsan ornare mi. Suspendisse vel odio sed elit suscipit ac id lectus.</p>
                        <h4>Evander Mac</h4>
                        <span>CEO at Costa Rica</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
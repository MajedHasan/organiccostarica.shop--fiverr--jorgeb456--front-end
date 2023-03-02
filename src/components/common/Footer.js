import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { GrFacebookOption } from "react-icons/gr"
import { SlLocationPin } from "react-icons/sl"
import { TfiEmail } from "react-icons/tfi"
import { BsTelephoneFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <footer styles={styles.footer}>
                <div className={styles.container}>
                    <div className={`py-10 grid lg:grid-cols-4 md:grid-cols-2 gap-y-6 ${styles.footerMiddle}`}>
                        <div>
                            <h2>Quick links</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/howitworks">How it works</Link></li>
                                <li><Link to="/whychooseus">Why choose us</Link></li>
                                <li><Link to="/connect">Connect</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Market</h2>
                            <ul>
                                <li><Link to="">All categories</Link></li>
                                <li><Link to="">Fresh herbs</Link></li>
                                <li><Link to="">Salads</Link></li>
                                <li><Link to="">Vegetables</Link></li>
                                <li><Link to="">The whole organic range</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Help</h2>
                            <ul>
                                <li><Link to="">Terms & conditions</Link></li>
                                <li><Link to="">Privacy Policy</Link></li>
                                <li><Link to="">Refund Policy</Link></li>
                                <li><Link to="">Terms of Service</Link></li>
                                <li><Link to="">Shipping Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Contact</h2>
                            <div>
                                <SlLocationPin />
                                <div>
                                    <h3>ORGANIC COSTA RICA:</h3>
                                    <p>1 km NE del cruce de la Cantera 11908 San Ignacio de Cajon</p>
                                </div>
                            </div>
                            <div>
                                <TfiEmail style={{ fontSize: "15px" }} />
                                <div>
                                    <h3>Email Address:</h3>
                                    <p>info@organiccostarica.shop</p>
                                </div>
                            </div>
                            <div>
                                <BsTelephoneFill style={{ fontSize: "15px" }} />
                                <div>
                                    <h3>Phone Number:</h3>
                                    <p>(+506) 8466 8080</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        <p>&copy; 2023, Organic Costa Rica Powered by Shopify</p>
                        <ul>
                            <li>
                                <a href="#">
                                    <GrFacebookOption />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
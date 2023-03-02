import { Link } from "react-router-dom"

import Logo from "../../assets/img/logo.png"
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { GrClose } from "react-icons/gr"
import { useState } from "react"

import styles from "./Header.module.css"


const Header = ({ topbarShown }) => {

    const [login, setLogin] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState("/")

    return (
        <>
            <header>
                {
                    topbarShown && <div className='md:py-2 py-1 px-3 bg-[#4B841F]'>
                        <p className='text-center text-white text-xs'>Fresh from our fields * GET YOUR ORGANIC GREENS * We deliver and you enjoy</p>
                    </div>
                }
                <div>
                    <div className="max-w-[1140px] w-full px-3 py-2 flex justify-between items-center gap-3 mx-auto relative">
                        <Link to="">
                            <img src={Logo} alt="Logo" className="max-w-[150px]" />
                        </Link>
                        <div className="flex items-center gap-6">
                            <div className={`flex items-center ${styles.menuWrapper}`}>
                                <Link to="/" className={activeMenu === "/" && styles.activeMenuItem} onClick={() => setActiveMenu("/")}>Home</Link>
                                <Link to="/shop" className={activeMenu === "shop" && styles.activeMenuItem} onClick={() => setActiveMenu("shop")}>Shop</Link>
                                <Link to="/howitworks" className={activeMenu === "howitworks" && styles.activeMenuItem} onClick={() => setActiveMenu("howitworks")}>How it Works</Link>
                                <Link to="/whychooseus" className={activeMenu === "whychooseus" && styles.activeMenuItem} onClick={() => setActiveMenu("whychooseus")}>Why choose Us</Link>
                                <Link to="/connect" className={activeMenu === "connect" && styles.activeMenuItem} onClick={() => setActiveMenu("connect")}>Connect</Link>
                                <span className={styles.toggleMenuIcon} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                    {
                                        showMobileMenu ? <GrClose /> : <AiOutlineMenu />
                                    }
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {
                                    login ? <>
                                        <Link to="/profile">
                                            <FaUser />
                                        </Link>
                                        <Link to="/cart" className="border-l-[2px] border-l-[#D9D9D9] pl-2">
                                            <FaShoppingCart />
                                        </Link>
                                    </> : <>
                                        <Link to="/login">
                                            <FaUser />
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                        <div className={`${styles.mobileMenu} ${showMobileMenu && styles.activeMobileMenu}`}>
                            <Link to="/" className={styles.activeMenuItem}>Home</Link>
                            <Link to="/shop">Shop</Link>
                            <Link to="/howitworks">How it Works</Link>
                            <Link to="/whychooseus">Why choose Us</Link>
                            <Link to="/connect">Connect</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
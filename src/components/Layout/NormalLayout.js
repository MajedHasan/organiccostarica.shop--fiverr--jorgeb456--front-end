import Header from "../common/Header"
import Footer from "../common/Footer"


const NormalLayout = ({ children, topbarShown }) => {
    return (
        <>
            <Header topbarShown={topbarShown}></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default NormalLayout
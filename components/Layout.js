import Footer from "./Footer";
import Navbar from "./Navbar";
import List from "./List";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <List />
            <Footer />
        </>
    )
}

export default Layout;
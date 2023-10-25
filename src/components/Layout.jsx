import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return ( <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div> );
}
 
export default Layout;
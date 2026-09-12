import { Outlet } from "react-router-dom";

import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";


function NavFooterLayout() {
  return (
    <>
        <Nav logo="/assets/img/Logo/logoNavBar.webp" />

            <Outlet />

        <Footer logo="/assets/img/Logo/logoNavBar.webp" />
    </>
  )
}

export default NavFooterLayout

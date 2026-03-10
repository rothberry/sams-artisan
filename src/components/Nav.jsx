import { act } from "react"
import { NavLink } from "react-router"

const Nav = () => {
    const styleNav = {
        fontFamily: "Courier New",
        backgroundColor: "black",
        color: "white",
    }
    // const activeStyle = {
    //     backgroundColor: "white",
    //     color: "black",
    // }
    const activeStyle = ({ isActive, isPending }) =>
        isPending ? "nav-pending" : isActive ? "nav-active" : "nav-transtioning"

    return (
        <>
            <span>
                <NavLink to="/" className={activeStyle}>
                    SAMS ART LOGO.
                </NavLink>
            </span>
            <span>
                <NavLink to="/about" className={activeStyle}>
                    ABOUT.
                </NavLink>
            </span>
            <span>
                <NavLink to="/products" className={activeStyle}>
                    PRODUCTS.
                </NavLink>
            </span>
            <span>
                <NavLink to="/contact" className={activeStyle}>
                    CONTACT.
                </NavLink>
            </span>
        </>
    )
}

export default Nav

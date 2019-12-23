import React, { Fragment, useContext } from 'react'
import { Link } from "react-router-dom"
import AuthContext from "../../context/auth/authContext"

const NavBar = () => {

    const authContext = useContext(AuthContext)

    const { isAuthenticated, logout, user } = authContext

    const onLogout = () => {
        logout()
    }

    // const handleBack = () => {
    //     props.history.goBack()
    // }


    const authLinks = (
        <Fragment>

            <li>
                <Link to="/about">About</Link>
            </li>
            <li>Hello {user && user.username}</li>
            <a href="#!" onClick={onLogout}>
                <i className="fas fa-sign-out-alt"></i>
                <span className="hide-sm">Logout</span>
            </a>

        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </Fragment>
    )

    return (
        <Fragment>
            <div className="navbar">
                <ul>
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
                <div className="home">
                    <Link to="/"><i className="fas fa-home fa-2x" ></i></Link>
                </div>
            </div>
        </Fragment>

    )
}

export default NavBar

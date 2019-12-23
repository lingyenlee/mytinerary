import React, { Fragment } from "react"
import SlideShow from "./Slideshow"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (

        <Fragment>
            <div className="LogoWrapper">
                <img src={require("../../images/MYtineraryLogo.png")} alt={"logo"} />
            </div>

            <div className="TextWrapper">
                <p>Find your perfect trip, designed by insiders who know and love their
                cities</p>
                <SlideShow></SlideShow>
                <h1>Start browsing</h1>
            </div>

            <div className="ArrowWrapper">
                <Link to="/login" ><img src={require("../../images/circled-right-2.png")} alt={"arrow"} /></Link>
            </div>
        </Fragment>
    )
}

export default LandingPage

import React, { useState, useContext } from 'react'
import PropTypes from "prop-types"
import CityContext from "../../context/city/cityContext"
import ItinerariesPage from "../pages/ItinerariesPage"


const CityItem = ({ city }) => {

    const { cityImage, cityName, country } = city

    const cityContext = useContext(CityContext)
    const { getCityItineraries, clearItineraries } = cityContext


    const [isOpen, setIsOpen] = useState(false)
    const [showItems, setShowItems] = useState("")


    const handleClick = (e) => {

        if (!isOpen) {
            getCityItineraries(e.target.id)
            setShowItems(e.target.id)
            setIsOpen(true)

        } else {
            setShowItems("")
            setIsOpen(false)
            clearItineraries()
        }
    }

    return (
        <div className="card">
            <img src={cityImage} alt="" />
            <div className="text-center">
                {cityName} {", "}{country}
            </div>
            <div>
                {showItems && <ItinerariesPage />}
                <button id={cityName} className="btn btn-light btn-block" onClick={handleClick}>
                    {isOpen ? "Close" : "Show Itineraries"}
                </button>
            </div>
        </div>
    )
}

CityItem.propTypes = {
    city: PropTypes.object.isRequired,
}

export default CityItem

import React, { Fragment, useContext } from 'react'
import CityItineraries from "./../cities/CityItineraries"
import CityContext from "../../context/city/cityContext"

const ItinerariesPage = () => {

    const cityContext = useContext(CityContext)
    const { cityItineraries } = cityContext

    const noItinerary = (
        <h2> No itineraries available. Please select another city </h2>
    )

    const showItinerary = (
        <Fragment>
            <h2>Itineraries Available</h2>
            <CityItineraries cityItineraries={cityItineraries} />
        </Fragment>
    )

    return (

        <div className="container itinerary py-1">
            {cityItineraries.length === 0
                ? noItinerary
                : showItinerary}
        </div>)

}

export default ItinerariesPage

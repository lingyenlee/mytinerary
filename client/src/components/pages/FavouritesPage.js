import React, { useContext, useEffect } from 'react'
import FavouriteContext from "../../context/favourite/favouriteContext"
import AuthContext from "../../context/auth/authContext"
import CityItineraries from "../cities/CityItineraries"
import BackButton from "../layout/BackButton"
import { Link } from "react-router-dom"

const FavouritePage = () => {

    const favouriteContext = useContext(FavouriteContext)
    const authContext = useContext(AuthContext)
    const { favourites, getFavourites } = favouriteContext
    const { user, loadUser } = authContext

    useEffect(() => {
        loadUser()
        getFavourites(user._id)
        //eslint-disable-next-line
    }, [])

    return (
        <div>

            <BackButton />

            <h3 className="text-center">Your favourite itineraries</h3>
            {favourites.length > 0
                ? <CityItineraries cityItineraries={favourites} />
                : <p>You currently have no favourites. View <Link to="/cities"> {" "} cities {" "} </Link>
                    to add itineraries.</p>
            }
        </div>

    )
}

export default FavouritePage
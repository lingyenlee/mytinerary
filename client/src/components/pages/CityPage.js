import React, { useContext, useEffect } from 'react'
import Cities from "../cities/Cities"
import CityFilter from '../cities/CityFilter'
import AuthContext from "../../context/auth/authContext"
import { Link } from "react-router-dom"
import GoToFavourites from '../favourites/GoToFavourites'


const CityPage = () => {

    const authContext = useContext(AuthContext)
    const { loadUser, user } = authContext

    useEffect(() => {
        loadUser()
        //eslint-disable-next-line
    }, [])


    return (
        <div>
            <Link to="/favourites">
                {user && <GoToFavourites userId={user._id} />}
            </Link>
            <CityFilter />
            <Cities />
        </div>
    )
}

export default CityPage

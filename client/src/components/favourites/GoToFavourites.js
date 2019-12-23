import React, { useContext } from 'react'
import FavouriteContext from "../../context/favourite/favouriteContext"

const GoToFavourites = ({ userId }) => {

    const favouriteContext = useContext(FavouriteContext)
    const { getFavourites } = favouriteContext

    const onClick = (e) => {
        getFavourites(e.target.id)
    }

    return (
        <button id={userId} onClick={onClick} className="btn btn-dark btn-block">
            See Favourites
        </button>

    )
}

export default GoToFavourites

import React, { useContext, useState, Fragment } from 'react'
import FavouriteContext from "../../context/favourite/favouriteContext"

const AddFavourite = ({ userId, itineraryId }) => {

    const [state, setState] = useState(true)

    const favouriteContext = useContext(FavouriteContext)
    const { addFavourite } = favouriteContext

    const toggle = () => {
        setState(!state)
        addFavourite(userId, itineraryId)
    }



    return (
        <Fragment>
            <button className="toggle" onClick={toggle}>
                {state ? <i className="far fa-heart fa-2x" ></i> : <i className="fas fa-heart fa-2x" ></i>}
            </button>
        </Fragment>
    )

}

export default AddFavourite
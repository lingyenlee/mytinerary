import React, { Fragment, useContext } from 'react'
import AuthContext from "../../context/auth/authContext"
import AddFavourite from '../favourites/AddFavourite'
import DeleteFavourite from '../favourites/DeleteFavourite'

const CityItineraries = (props) => {

    const authContext = useContext(AuthContext)
    const { user, isAuthenticated } = authContext

    return (
        <Fragment>
            {props.cityItineraries.map(itinerary => (
                <div className="card" key={itinerary._id}>
                    <div className="grid-2">
                        <div className="itiierary-container">
                            <img src={itinerary.itineraryImage} alt=""></img>

                            {user && isAuthenticated ?
                                user.favourites.includes(itinerary._id) ?
                                    <DeleteFavourite userId={user._id} itineraryId={itinerary._id} />
                                    : <AddFavourite userId={user._id} itineraryId={itinerary._id} />
                                : null
                            }
                        </div>
                        <div>
                            <h3>{itinerary.itineraryName}</h3>
                            <ul>
                                <li>
                                    <strong>Rating: </strong>{itinerary.rating}
                                </li>
                                <li>
                                    <strong>Duration (hour): </strong>{itinerary.duration}
                                </li>
                                <li>
                                    <strong>Cost: </strong>{itinerary.cost}
                                </li>
                                <li>
                                    <strong>Posted by: </strong>{itinerary.username}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>)
            )}
        </Fragment>)

}

export default CityItineraries
